import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from 'src/app/models/bank.model';
import { BanksService } from 'src/app/services/banks.service';

@Component({
  selector: 'app-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.css']
})
export class BanksListComponent implements OnInit {

  banks$!: Observable<Bank[]>;

  constructor(
    private banksService: BanksService
  ) { }

  ngOnInit(): void {
    this.banks$ = this.banksService.getBanks();
  }
}
