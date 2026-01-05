export const calculateMonthlyMortgage = (
  loanAmount: number,
  annualRate: number,
  years: number = 30
): number => {
  const monthlyRate = annualRate / 100 / 12;
  const numPayments = years * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);
  return Math.round(monthlyPayment);
};

export const calculateCapRate = (
  annualRent: number,
  expenses: number,
  purchasePrice: number
): number => {
  const noi = annualRent - expenses;
  return (noi / purchasePrice) * 100;
};

export const calculateCashOnCash = (
  annualCashFlow: number,
  cashInvested: number
): number => {
  return (annualCashFlow / cashInvested) * 100;
};

