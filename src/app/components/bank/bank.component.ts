import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bank } from 'src/app/models/bank.model';
import { BankDialogComponent } from '../bank-dialog/bank-dialog.component';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {

  @Input() bank!: Bank;

  constructor(public dialog: MatDialog) { }

  updateBank(): void {
    const dialogRef = this.dialog.open(BankDialogComponent, {
      width: '50%',
      maxWidth: '700px',
      data: this.bank
    });
    dialogRef.afterClosed().subscribe();
  }
}
