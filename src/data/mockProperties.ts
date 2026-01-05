export interface VisaSafetyFactors {
  propertyManagement: {
    available: boolean;
    name: string;
    fee: number;
    distance: number;
  };
  turnkey: boolean;
  propertyCondition: string;
  maintenanceLevel: string;
  contractorAvailability: string;
}

export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  propertyType: string;
  images: string[];
  monthlyRent: number;
  propertyTax: number;
  insurance: number;
  hoa: number;
  capRate: number;
  cashOnCash: number;
  dscr: number;
  monthlyCashFlow: number;
  visaSafetyScore: number;
  visaSafetyFactors: VisaSafetyFactors;
  isTurnkey: boolean;
  hasManager: boolean;
  daysOnMarket: number;
  status: string;
}

export const mockProperties: Property[] = [
  {
    id: "prop_001",
    address: "1234 Oak Street",
    city: "Austin",
    state: "TX",
    zip: "78745",
    price: 285000,
    beds: 3,
    baths: 2,
    sqft: 1450,
    yearBuilt: 2018,
    propertyType: "Single Family",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568605117032-2723b5b8e0b0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568605116820-2a0f5c7f5b8e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568605117032-2723b5b8e0b0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop"
    ],
    monthlyRent: 2100,
    propertyTax: 380,
    insurance: 120,
    hoa: 0,
    capRate: 7.8,
    cashOnCash: 9.2,
    dscr: 1.28,
    monthlyCashFlow: 222,
    visaSafetyScore: 8,
    visaSafetyFactors: {
      propertyManagement: { available: true, name: "ABC Property Management", fee: 8, distance: 5 },
      turnkey: true,
      propertyCondition: "Excellent - New HVAC (2023), Roof (2021)",
      maintenanceLevel: "Low",
      contractorAvailability: "Moderate"
    },
    isTurnkey: true,
    hasManager: true,
    daysOnMarket: 12,
    status: "Active"
  },
  {
    id: "prop_002",
    address: "5678 Maple Avenue",
    city: "Houston",
    state: "TX",
    zip: "77001",
    price: 245000,
    beds: 3,
    baths: 2,
    sqft: 1320,
    yearBuilt: 2015,
    propertyType: "Single Family",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448075-cbc16bf4d123?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"
    ],
    monthlyRent: 1850,
    propertyTax: 320,
    insurance: 110,
    hoa: 0,
    capRate: 8.1,
    cashOnCash: 10.1,
    dscr: 1.35,
    monthlyCashFlow: 285,
    visaSafetyScore: 9,
    visaSafetyFactors: {
      propertyManagement: { available: true, name: "Houston Rentals LLC", fee: 7, distance: 3 },
      turnkey: true,
      propertyCondition: "Excellent - Recently renovated",
      maintenanceLevel: "Low",
      contractorAvailability: "High"
    },
    isTurnkey: true,
    hasManager: true,
    daysOnMarket: 8,
    status: "Active"
  },
  {
    id: "prop_003",
    address: "910 Pine Road",
    city: "Phoenix",
    state: "AZ",
    zip: "85001",
    price: 310000,
    beds: 4,
    baths: 2.5,
    sqft: 1680,
    yearBuilt: 2020,
    propertyType: "Single Family",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
    ],
    monthlyRent: 2250,
    propertyTax: 290,
    insurance: 100,
    hoa: 50,
    capRate: 7.2,
    cashOnCash: 8.4,
    dscr: 1.22,
    monthlyCashFlow: 195,
    visaSafetyScore: 9,
    visaSafetyFactors: {
      propertyManagement: { available: true, name: "Desert Property Pros", fee: 8, distance: 2 },
      turnkey: true,
      propertyCondition: "Like New",
      maintenanceLevel: "Very Low",
      contractorAvailability: "High"
    },
    isTurnkey: true,
    hasManager: true,
    daysOnMarket: 5,
    status: "Active"
  },
  {
    id: "prop_004",
    address: "222 Birch Lane",
    city: "Atlanta",
    state: "GA",
    zip: "30301",
    price: 265000,
    beds: 3,
    baths: 2,
    sqft: 1380,
    yearBuilt: 2012,
    propertyType: "Townhouse",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
    ],
    monthlyRent: 1950,
    propertyTax: 280,
    insurance: 95,
    hoa: 150,
    capRate: 7.0,
    cashOnCash: 8.0,
    dscr: 1.18,
    monthlyCashFlow: 165,
    visaSafetyScore: 10,
    visaSafetyFactors: {
      propertyManagement: { available: true, name: "Peachtree Management", fee: 8, distance: 1 },
      turnkey: true,
      propertyCondition: "Excellent",
      maintenanceLevel: "Very Low - HOA handles exterior",
      contractorAvailability: "High"
    },
    isTurnkey: true,
    hasManager: true,
    daysOnMarket: 18,
    status: "Active"
  },
  {
    id: "prop_005",
    address: "333 Cedar Court",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    price: 340000,
    beds: 4,
    baths: 3,
    sqft: 1850,
    yearBuilt: 2019,
    propertyType: "Single Family",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop"
    ],
    monthlyRent: 2400,
    propertyTax: 420,
    insurance: 130,
    hoa: 0,
    capRate: 7.1,
    cashOnCash: 8.2,
    dscr: 1.20,
    monthlyCashFlow: 210,
    visaSafetyScore: 7,
    visaSafetyFactors: {
      propertyManagement: { available: true, name: "DFW Rentals", fee: 9, distance: 8 },
      turnkey: true,
      propertyCondition: "Good - Minor updates recommended",
      maintenanceLevel: "Moderate",
      contractorAvailability: "Moderate"
    },
    isTurnkey: true,
    hasManager: true,
    daysOnMarket: 25,
    status: "Active"
  },
  {
    id: "prop_006",
    address: "444 Elm Street",
    city: "Tampa",
    state: "FL",
    zip: "33601",
    price: 230000,
    beds: 2,
    baths: 2,
    sqft: 1100,
    yearBuilt: 2016,
    propertyType: "Condo",
    images: [
      "https://images.unsplash.com/photo-1600607688909-df2c13ec5a1a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607688909-df2c13ec5a1a?w=800&h=600&fit=crop"
    ],
    monthlyRent: 1700,
    propertyTax: 240,
    insurance: 150,
    hoa: 200,
    capRate: 6.8,
    cashOnCash: 7.5,
    dscr: 1.15,
    monthlyCashFlow: 130,
    visaSafetyScore: 10,
    visaSafetyFactors: {
      propertyManagement: { available: true, name: "Sunshine Property Group", fee: 8, distance: 1 },
      turnkey: true,
      propertyCondition: "Excellent",
      maintenanceLevel: "Very Low - Condo association handles most",
      contractorAvailability: "High"
    },
    isTurnkey: true,
    hasManager: true,
    daysOnMarket: 30,
    status: "Active"
  }
];

