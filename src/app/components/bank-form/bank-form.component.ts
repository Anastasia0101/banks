import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Bank } from 'src/app/models/bank.model';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent implements OnInit {
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
  @Input() chosenBank?: Bank;
  @Output() bank = new EventEmitter<Bank>();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    if (this.chosenBank) {
      this.bankForm.patchValue({
        name: this.chosenBank.name,
        interestRate: this.chosenBank.interestRate,
        maxLoan: this.chosenBank.maxLoan,
        minDownPayment: this.chosenBank.minDownPayment,
        loanTerm: this.chosenBank.loanTerm
      });
    }
  }

  onFormSubmit(): void {
    const bank = this.bankForm.value as Bank;
    this.bank.emit(bank);
  }
}
