import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Bank } from "../models/bank.model";

@Injectable({
  providedIn: 'root',
})
export class BanksService {
  constructor(
    private fireStore: AngularFirestore
  ) {}

  createPoster(bank: Bank): void {
    this.fireStore.collection('banks').add(bank);
  }
}
