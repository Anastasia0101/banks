import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MortgageService {

  calcMonthlyPayment(
    initialLoan: number,
    downPayment: number,
    r: number,
    n: number
  ): number {
    const p = this.calcAmountBorrowed(initialLoan, downPayment);
    return Math.round(Math.pow(p*(r / 12)*(1 + (r / 12)), n) / (Math.pow(1 + (r / 12), n) - 1));
  }

  calcAmountBorrowed(initialLoan: number, downPayment: number): number {
    return initialLoan - downPayment;
  }
}
