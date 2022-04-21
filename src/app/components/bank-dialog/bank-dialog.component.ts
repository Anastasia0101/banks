import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Bank } from 'src/app/models/bank.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  isDisplay = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BankDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public bank: Bank,
    private banksService: BanksService
  ) {}

  ngOnInit(): void {
    if (this.bank) {
      this.isDisplay = true;
      this.bankForm.patchValue({
        name: this.bank.name,
        interestRate: this.bank.interestRate,
        maxLoan: this.bank.maxLoan,
        minDownPayment: this.bank.minDownPayment,
        loanTerm: this.bank.loanTerm
      });
    }
  }

  onFormSubmit(): void {
    this.closeDialog();
    const bank = this.bankForm.value as Bank;
    !this.bank ? this.createBank(bank) : this.updateBank(this.bank.id, bank);
  }

  createBank(bank: Bank): void {
    this.banksService.createBank(bank);
  }

  updateBank(id: string, bank: Bank): void {
    this.banksService.updateBank(id, bank);
  }

  deleteBank(): void {
    this.closeDialog();
    this.banksService.deleteBank(this.bank.id);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
