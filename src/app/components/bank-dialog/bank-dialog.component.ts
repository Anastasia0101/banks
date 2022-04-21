import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Bank } from 'src/app/models/bank.model';
import { MatDialogRef } from '@angular/material/dialog';
import { BanksService } from 'src/app/services/banks.service';

@Component({
  selector: 'app-bank-dialog',
  templateUrl: './bank-dialog.component.html',
  styleUrls: ['./bank-dialog.component.css']
})
export class BankDialogComponent implements OnInit {

  bankForm = this.formBuilder.group({
    name: [
      '', [
        Validators.required,
        Validators.pattern('[a-zA-ZА-ЯҐЄІЇа-яґєії0-9 ]*'),
        Validators.min(2),
      ]
    ],
    interestRate: [
      '', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]
    ],
    maxLoan: [
      '', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]
    ],
    minDownPayment: [
      '', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]
    ],
    loanTerm: [
      '', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BankDialogComponent>,
    private banksService: BanksService
  ) { }

  ngOnInit(): void {}

  onFormSubmit(): void {
    const bank = this.bankForm.value as Bank;
    this.banksService.createPoster(bank);
  }
}
