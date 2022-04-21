import { Injectable } from "@angular/core";
import { AngularFirestore, Settings } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Bank } from "../models/bank.model";

@Injectable({
  providedIn: 'root',
})
export class BanksService {
  constructor(
    private fireStore: AngularFirestore
  ) {}

  createBank(bank: Bank): void {
    this.fireStore.collection('banks').add(bank);
  }

  getBanks(): Observable<Bank[]> {
    return this.fireStore.collection<Bank>('banks').valueChanges({ idField: 'id' });
  }

  updateBank(id: string, bank: Bank): void {
    this.fireStore.collection<Bank>('banks').doc(id).update(bank);
  }

  deleteBank(id: string): void {
    this.fireStore.collection<Bank>('banks').doc(id).delete();
  }
}
