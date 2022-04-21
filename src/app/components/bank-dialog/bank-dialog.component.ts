import { Component, Inject, OnInit } from '@angular/core';
import { Bank } from 'src/app/models/bank.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BanksService } from 'src/app/services/banks.service';

@Component({
  selector: 'app-bank-dialog',
  templateUrl: './bank-dialog.component.html',
  styleUrls: ['./bank-dialog.component.css']
})
export class BankDialogComponent implements OnInit {
  isDisplay = false;

  constructor(
    public dialogRef: MatDialogRef<BankDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public bank: Bank,
    private banksService: BanksService
  ) {}

  ngOnInit(): void {
    if (this.bank) this.isDisplay = true;
  }

  saveBank(bank: Bank): void {
    this.closeDialog();
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
