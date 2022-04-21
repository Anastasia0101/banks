import { Component, OnInit } from '@angular/core';
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
        Validators.pattern('[a-zA-Z0-9 ]*')
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
  bank?: Bank;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    console.log(this.bankForm.value);
  }
}
