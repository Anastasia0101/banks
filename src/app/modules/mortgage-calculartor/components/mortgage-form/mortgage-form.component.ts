import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Bank } from 'src/app/models/bank.model';
import { BanksService } from 'src/app/services/banks.service';

@Component({
  selector: 'app-mortgage-form',
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['./mortgage-form.component.css']
})
export class MortgageFormComponent implements OnInit {
  mortgageForm = this.formBuilder.group({
    bank: [
      '', Validators.required
    ],
    initialLoan: [
      '', [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]
    ],
    downPayment: [
      '', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]
    ]
  });
  banks$!: Observable<Bank[]>;
  chosenBank?: Bank;

  constructor(
    private formBuilder: FormBuilder,
    private banksService: BanksService
  ) { }

  ngOnInit(): void {
    this.banks$ = this.banksService.getBanks();
    this.mortgageForm.get("bank")?.valueChanges.subscribe((bank: Bank) => {
      this.chosenBank = bank;
      this.mortgageForm.controls['initialLoan'].addValidators([
        Validators.max(bank.maxLoan)
      ]);
      this.mortgageForm.controls['downPayment'].addValidators([
        Validators.min(bank.minDownPayment)
      ]);
    });
  }
}
