export interface Bank {
  id: string;
  name: string;
  interestRate: number;
  maxLoan: number;
  minDownPayment: number;
  loanTerm: number;
}
