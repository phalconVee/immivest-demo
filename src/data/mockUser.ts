export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  visaType: string;
  visaExpiration: string;
  countryOfOrigin: string;
  currentCity: string;
  currentState: string;
  employer?: string;
  yearsInUS: number;
  annualIncome: number;
  availableDownPayment: number;
  existingDebt: number;
  hasUSCredit: boolean;
  foreignCreditScore?: number;
  foreignCreditSource?: string;
  creditPassportScore?: number;
  maxBuyingPower?: number;
  preQualifiedLoanAmount?: number;
  preQualifiedRate?: number;
  onboardingComplete: boolean;
  onboardingStep: number;
}

export const mockUser: User = {
  id: "user_001",
  firstName: "Rahul",
  lastName: "Sharma",
  email: "rahul.sharma@email.com",
  visaType: "H-1B",
  visaExpiration: "2027-09-15",
  countryOfOrigin: "India",
  currentCity: "Austin",
  currentState: "TX",
  employer: "TechCorp Inc.",
  yearsInUS: 2,
  annualIncome: 145000,
  availableDownPayment: 80000,
  existingDebt: 12000,
  hasUSCredit: false,
  foreignCreditScore: 780,
  foreignCreditSource: "CIBIL",
  creditPassportScore: 720,
  maxBuyingPower: 320000,
  preQualifiedLoanAmount: 240000,
  preQualifiedRate: 7.25,
  onboardingComplete: true,
  onboardingStep: 4
};

