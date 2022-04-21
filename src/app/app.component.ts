import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankDialogComponent } from './components/bank-dialog/bank-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(BankDialogComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe();
  }
}
