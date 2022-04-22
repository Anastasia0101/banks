import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankDialogComponent } from '../bank-dialog/bank-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(BankDialogComponent, {
      width: '50%',
      maxWidth: '700px'
    });
    dialogRef.afterClosed();
  }
}
