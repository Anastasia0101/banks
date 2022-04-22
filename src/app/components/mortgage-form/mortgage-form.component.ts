import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Bank } from 'src/app/models/bank.model';
import { BanksService } from '../../services/banks.service';
import { MortgageService } from '../../services/mortgage.service';

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
        Validators.min(1000)
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
  monthlyPayment!: number;

  constructor(
    private formBuilder: FormBuilder,
    private banksService: BanksService,
    private mortgageService: MortgageService
  ) { }

  ngOnInit(): void {
    this.banks$ = this.banksService.getBanks();
    this.mortgageForm.get("bank")?.valueChanges.subscribe((bank: Bank) => {
      this.chosenBank = bank;
      const validators = [
        Validators.max(bank.maxLoan+1),
        Validators.min(bank.minDownPayment-1)
      ];
      this.mortgageForm.controls['initialLoan'].addValidators([
        ...validators
      ]);
      this.mortgageForm.controls['downPayment'].addValidators([
        ...validators
      ]);
    });
  }

  onSubmit(): void {
    if (this.chosenBank) {
      this.monthlyPayment = this.mortgageService.calcMonthlyPayment(
        this.mortgageForm.value.initialLoan,
        this.mortgageForm.value.downPayment,
        this.chosenBank.interestRate,
        this.chosenBank.loanTerm
      );
    }
  }
}
