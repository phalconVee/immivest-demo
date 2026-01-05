export interface PortfolioProperty {
  id: string;
  propertyId: string;
  purchaseDate: string;
  purchasePrice: number;
  currentValue: number;
  loanBalance: number;
  equity: number;
  monthlyMortgage: number;
  monthlyRent: number;
  monthlyCashFlow: number;
  annualizedReturn: number;
  tenantStatus: string;
  leaseEnd: string;
  propertyManager: string;
  lastRentCollected: string;
}

export const mockPortfolio: PortfolioProperty[] = [
  {
    id: "owned_001",
    propertyId: "prop_001",
    purchaseDate: "2025-08-15",
    purchasePrice: 285000,
    currentValue: 298000,
    loanBalance: 209500,
    equity: 88500,
    monthlyMortgage: 1458,
    monthlyRent: 2100,
    monthlyCashFlow: 222,
    annualizedReturn: 9.2,
    tenantStatus: "Occupied",
    leaseEnd: "2026-08-14",
    propertyManager: "ABC Property Management",
    lastRentCollected: "2026-01-01"
  }
];

