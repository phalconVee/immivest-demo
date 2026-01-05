# PRODUCT_SPEC.md
# ImmiVest – AI-Powered Real Estate Concierge for Immigrant Investors
## Non-Functional Demo Prototype Specification

---

## 1. Overview

### 1.1 Product Summary
ImmiVest is an AI-powered concierge platform that guides high-earning immigrant investors (H-1B, L-1, O-1, F-1/OPT visa holders) through U.S. real estate investment—from credit bridging to property acquisition to passive portfolio management.

### 1.2 Demo Purpose
This is a **non-functional, clickable prototype** to illustrate the end-to-end user journey. All data is mock/static. No real API integrations, authentication, or transactions.

### 1.3 Tech Stack (Recommended)
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts (for portfolio/analytics)
- **Routing**: React Router v6
- **State**: React Context (simple, no Redux needed for demo)

---

## 2. Brand & Visual Design

### 2.1 Brand Identity
- **Name**: ImmiVest
- **Tagline**: "Your Bridge to American Real Estate"
- **Voice**: Trustworthy, empowering, knowledgeable, culturally aware

### 2.2 Color Palette
```
Primary:       #1E3A5F (Deep Navy Blue) – Trust, stability, professionalism
Secondary:     #10B981 (Emerald Green) – Growth, prosperity, success
Accent:        #F59E0B (Amber Gold) – Opportunity, warmth, optimism
Background:    #F8FAFC (Slate 50) – Clean, modern
Surface:       #FFFFFF (White) – Cards, modals
Text Primary:  #0F172A (Slate 900)
Text Secondary:#64748B (Slate 500)
Error:         #EF4444 (Red 500)
Success:       #10B981 (Emerald 500)
Warning:       #F59E0B (Amber 500)
```

### 2.3 Typography
- **Headings**: Inter (700 weight) or system sans-serif
- **Body**: Inter (400/500 weight) or system sans-serif
- **Monospace**: JetBrains Mono (for numbers/metrics)

### 2.4 Design Principles
- **Clean & Professional**: Minimal clutter, generous whitespace
- **Data-Forward**: Key metrics prominently displayed
- **Reassuring**: Green checkmarks, progress indicators, trust badges
- **Accessible**: WCAG 2.1 AA contrast ratios

### 2.5 Component Style
- **Border Radius**: 8px (cards), 6px (buttons), 4px (inputs)
- **Shadows**: Subtle (`shadow-sm` for cards, `shadow-md` on hover)
- **Spacing**: 8px grid system
- **Cards**: White background, 1px slate-200 border, 8px radius

---

## 3. Application Structure

### 3.1 Page Map
```
/                       → Landing Page (Public)
/onboarding             → Multi-step Onboarding Flow
  /onboarding/visa      → Step 1: Visa Information
  /onboarding/financial → Step 2: Financial Profile
  /onboarding/credit    → Step 3: Credit Bridge
  /onboarding/results   → Step 4: Pre-Qualification Results
/dashboard              → Main Dashboard (Post-onboarding)
/properties             → Property Search & Listings
/properties/:id         → Property Detail with Visa-Safety Score
/transaction/:id        → Transaction Concierge Flow
/portfolio              → Portfolio Management & Analytics
/settings               → User Settings (placeholder)
```

### 3.2 Navigation Structure
**Pre-Auth (Landing)**:
- Logo (left)
- Nav Links: How It Works, Features, About (center)
- CTA: "Get Started" button (right)

**Post-Onboarding (Dashboard)**:
- Sidebar navigation (collapsible on mobile)
- Items: Dashboard, Properties, Portfolio, Messages, Settings
- User avatar + name in sidebar footer

---

## 4. Screen Specifications

---

### 4.1 Landing Page (`/`)

#### Purpose
Convert visitors by explaining value proposition and driving sign-ups.

#### Sections

**Hero Section**
- Headline: "Build Wealth in American Real Estate—Even Without U.S. Credit"
- Subheadline: "ImmiVest bridges your international financial history to unlock property investments. AI-powered. Visa-compliant. Designed for immigrants."
- CTA Button: "Start Your Journey" → `/onboarding`
- Secondary CTA: "See How It Works" → scroll to explainer
- Background: Abstract gradient or subtle geometric pattern in brand colors
- Trust badges: "Trusted by 500+ H-1B investors" (mock), logos of visa types supported

**How It Works (3 Steps)**
| Step | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | CreditCard | Credit Bridge | We translate your foreign credit history into U.S. buying power |
| 2 | Search | Smart Matching | AI finds properties optimized for your budget and visa compliance |
| 3 | Home | Passive Ownership | Professional management keeps your investment hands-off and visa-safe |

**Key Features Grid (2x2)**
- **AI Concierge**: 24/7 guidance from search to close
- **Visa-Safety Score**: Know which properties are compliant
- **DSCR Financing**: No U.S. credit? No problem.
- **Portfolio Growth**: Refinance alerts, 1031 exchange guidance

**Social Proof**
- 3 testimonial cards with photo (placeholder), quote, name, visa type
- Example: "ImmiVest helped me buy my first rental property 6 months after arriving on my H-1B. The Visa-Safety Score gave me peace of mind." — Priya S., H-1B, Software Engineer

**CTA Banner**
- "Ready to invest in your American dream?"
- Button: "Get Pre-Qualified in 5 Minutes"

**Footer**
- Links: Privacy, Terms, Contact, FAQ
- Social icons (placeholder)
- © 2025 ImmiVest

---

### 4.2 Onboarding Flow (`/onboarding/*`)

#### Overview
4-step wizard with progress indicator. Each step validates before proceeding.

#### Global Elements
- Progress bar at top (Step X of 4)
- Step labels: Visa Info → Financial Profile → Credit Bridge → Your Results
- Back button (except step 1)
- "Save & Continue" primary button

---

#### Step 1: Visa Information (`/onboarding/visa`)

**Form Fields**
| Field | Type | Options/Validation |
|-------|------|-------------------|
| Visa Type | Select | H-1B, H-4 (EAD), L-1A, L-1B, O-1, F-1 (OPT), F-1 (CPT), Other |
| Visa Start Date | Date Picker | Required |
| Visa Expiration Date | Date Picker | Required, must be > today |
| Country of Origin | Select | Searchable country list |
| Current U.S. State | Select | All 50 states + DC |
| Current City | Text Input | Required |
| Employer Name | Text Input | Optional |
| Years in U.S. | Number | 0-50 |

**Info Callout**
> "Your visa type helps us match you with compliant financing options and calculate your Visa-Safety Score."

---

#### Step 2: Financial Profile (`/onboarding/financial`)

**Form Fields**
| Field | Type | Options/Validation |
|-------|------|-------------------|
| Annual Gross Income (USD) | Currency Input | Required, min $50,000 |
| Available Down Payment | Currency Input | Required, min $25,000 |
| Existing U.S. Debt | Currency Input | Default $0 |
| Do you have a U.S. credit score? | Radio | Yes / No / Not Sure |
| If Yes: Approximate Score | Select | <600, 600-649, 650-699, 700-749, 750+ |
| Foreign Bank Accounts | Checkbox list | India, China, Nigeria, UK, Canada, Other |
| Proof of Funds Available | Radio | Yes, ready to upload / Not yet |

**Info Callout**
> "Don't worry if you don't have U.S. credit. Our Credit Bridge uses your international financial history."

---

#### Step 3: Credit Bridge (`/onboarding/credit`)

**UI Components**

**Foreign Credit Import (Mock)**
- Card: "Connect Your International Credit"
- Logo grid showing supported countries: India (CIBIL), China (PBOC), Nigeria (CRC), UK (Experian UK), Canada (Equifax CA)
- User selects country → mock "connecting" animation (3 seconds) → success checkmark
- Result card: "Foreign Credit Score Retrieved: 780 (CIBIL, India)"

**Credit Passport Generation**
- Animation: Score translating (780 CIBIL → 720 U.S. Equivalent)
- Explainer text: "Your CIBIL score of 780 translates to an estimated U.S. credit equivalent of 720, qualifying you for competitive DSCR loan rates."

**Alternative Data Points**
- Checklist of what strengthens profile:
  - ✅ Consistent employment (2+ years)
  - ✅ Strong foreign credit history
  - ✅ Significant savings/down payment
  - ⚠️ No U.S. rental history (we can work with this)

---

#### Step 4: Pre-Qualification Results (`/onboarding/results`)

**Results Card (Hero)**
```
┌─────────────────────────────────────────────────────┐
│  🎉 Congratulations, [First Name]!                  │
│                                                     │
│  You're Pre-Qualified for:                          │
│  ┌─────────────────────────────────────────────┐   │
│  │  $320,000                                    │   │
│  │  Maximum Property Value                      │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Based on:                                          │
│  • Down Payment: $80,000 (25%)                      │
│  • Loan Amount: $240,000 (DSCR Loan)                │
│  • Est. Interest Rate: 7.25%                        │
│  • Monthly Payment: ~$1,640                         │
│                                                     │
│  Your Credit Passport Score: 720                    │
│  Visa-Safety Recommendation: Focus on turnkey       │
│  properties with professional management            │
└─────────────────────────────────────────────────────┘
```

**Financing Options Comparison Table**
| Option | DSCR Loan | Foreign National | Conventional (Future) |
|--------|-----------|------------------|----------------------|
| Requires U.S. Credit | ❌ No | ❌ No | ✅ Yes |
| Down Payment | 25% | 30% | 20% |
| Interest Rate | 7.25% | 7.75% | 6.5% |
| Your Eligibility | ✅ Eligible Now | ✅ Eligible Now | 🔜 After 2 years |

**CTA**
- Primary: "Browse Properties" → `/properties`
- Secondary: "Download Pre-Qualification Letter" (mock PDF download)

---

### 4.3 Dashboard (`/dashboard`)

#### Layout
- Sidebar (240px) + Main Content
- Header with search bar and notifications icon

#### Main Content Sections

**Welcome Banner**
- "Welcome back, [Name]! Your real estate journey is 40% complete."
- Progress bar showing: Onboarding ✅ → Property Search 🔄 → Offer → Closing → Ownership
- CTA: "Continue to Properties"

**Quick Stats Row (4 Cards)**
| Metric | Value | Subtext |
|--------|-------|---------|
| Buying Power | $320,000 | Pre-qualified |
| Properties Viewed | 12 | 3 saved |
| Visa-Safe Matches | 8 | In your budget |
| Credit Passport | 720 | Good standing |

**AI Concierge Chat Preview**
- Small chat widget in bottom-right corner
- Last message preview: "I found 3 new properties in Austin matching your criteria. Want to see them?"
- Click expands to full chat panel

**Recommended Properties (Carousel)**
- 3-4 property cards (see Property Card component spec below)
- "View All Properties" link

**Education Module**
- "Learn: DSCR Loans Explained" card with play icon (mock video)
- "Read: Visa Compliance Checklist" card with document icon

---

### 4.4 Property Search (`/properties`)

#### Layout
- Filter sidebar (280px) on left
- Property grid (main area) with map toggle option

#### Filter Sidebar

**Filters**
| Filter | Type | Options |
|--------|------|---------|
| Price Range | Dual Slider | $100K - $500K (default: user's max) |
| Property Type | Checkbox | Single Family, Condo, Townhouse, Multi-Family |
| Bedrooms | Checkbox | 1, 2, 3, 4+ |
| Location | Multi-select | Top metros: Austin, Houston, Dallas, Phoenix, Atlanta, Tampa, Charlotte |
| Min Cap Rate | Slider | 5% - 12% |
| Min Visa-Safety Score | Slider | 1-10 (default: 7+) |
| Turnkey Only | Toggle | Show only move-in ready |
| Property Manager Available | Toggle | Default ON |

**Active Filters**
- Pill badges showing active filters with X to remove

#### Property Grid

**Property Card Component**
```
┌─────────────────────────────────────────┐
│ [Property Image - 16:9 ratio]           │
│ ┌─────┐                         ┌─────┐ │
│ │ NEW │                         │ ♡   │ │ (Save button)
│ └─────┘                         └─────┘ │
├─────────────────────────────────────────┤
│ $285,000                    Cap: 7.8%   │
│ 3 bed • 2 bath • 1,450 sqft             │
│ 1234 Oak Street, Austin, TX             │
├─────────────────────────────────────────┤
│ Visa-Safety: ████████░░ 8/10            │
│ ✅ Turnkey  ✅ Manager Available         │
├─────────────────────────────────────────┤
│ Est. Monthly Cash Flow: +$340           │
│ [View Details]                          │
└─────────────────────────────────────────┘
```

**Grid Layout**
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Infinite scroll or pagination (12 per page)
- Sort dropdown: "Best Match", "Price: Low-High", "Price: High-Low", "Highest Cap Rate", "Highest Visa-Safety"

---

### 4.5 Property Detail (`/properties/:id`)

#### Hero Section
- Image gallery (5 mock images) with thumbnail strip
- Sticky header on scroll with price and CTA

#### Property Info (Left Column - 60%)

**Basic Details**
- Address, Price, Beds/Baths/Sqft
- Year Built, Property Type, HOA (if applicable)
- Days on Market

**Investment Metrics Card**
```
┌─────────────────────────────────────────────────────┐
│ INVESTMENT ANALYSIS                                  │
├─────────────────────────────────────────────────────┤
│ Purchase Price         │ $285,000                   │
│ Down Payment (25%)     │ $71,250                    │
│ Loan Amount            │ $213,750                   │
│ Est. Interest Rate     │ 7.25%                      │
│ Monthly Mortgage       │ $1,458                     │
├─────────────────────────────────────────────────────┤
│ Monthly Rent (Est.)    │ $2,100                     │
│ Property Taxes         │ -$380                      │
│ Insurance              │ -$120                      │
│ Property Management    │ -$168 (8%)                 │
│ Vacancy Reserve        │ -$105 (5%)                 │
│ Maintenance Reserve    │ -$105 (5%)                 │
├─────────────────────────────────────────────────────┤
│ NET MONTHLY CASH FLOW  │ +$222                      │ (Green, prominent)
│ Cap Rate               │ 7.8%                       │
│ Cash-on-Cash Return    │ 9.2%                       │
│ DSCR                   │ 1.28                       │
└─────────────────────────────────────────────────────┘
```

**Description**
- 2-3 paragraphs about property (mock text)
- Neighborhood highlights

**Features & Amenities**
- Grid of icons: Central AC, Garage, Fenced Yard, New Roof, etc.

#### Sidebar (Right Column - 40%)

**Visa-Safety Score Card** ⭐ (KEY FEATURE)
```
┌─────────────────────────────────────────────────────┐
│ VISA-SAFETY SCORE                                   │
│                                                     │
│         ████████░░  8/10                            │
│              HIGH SAFETY                            │
│                                                     │
├─────────────────────────────────────────────────────┤
│ Why this score:                                     │
│                                                     │
│ ✅ Property Management Available                    │
│    "ABC Property Management" - 5 miles away         │
│    Fee: 8% of rent                                  │
│                                                     │
│ ✅ Turnkey Condition                                │
│    New HVAC (2023), Roof (2021), No repairs needed  │
│                                                     │
│ ✅ Low Maintenance Property Type                    │
│    Single-family, small lot, minimal landscaping    │
│                                                     │
│ ⚠️ Moderate Contractor Availability                 │
│    3 licensed contractors within 15 miles           │
│                                                     │
├─────────────────────────────────────────────────────┤
│ 💡 What this means for you:                         │
│ This property can be owned 100% passively.          │
│ Professional management handles all tenant and      │
│ maintenance interactions, keeping you visa-safe.    │
└─────────────────────────────────────────────────────┘
```

**Your Fit Card**
```
┌─────────────────────────────────────────────────────┐
│ YOUR FIT                                            │
├─────────────────────────────────────────────────────┤
│ Budget Match:      ✅ Under your $320K max          │
│ Down Payment:      ✅ $71K (you have $80K)          │
│ Cash Flow:         ✅ Positive from month 1         │
│ Visa Compliance:   ✅ High safety score             │
├─────────────────────────────────────────────────────┤
│ AI Recommendation:                                  │
│ "Strong match for your profile. The positive cash   │
│ flow and turnkey condition minimize risk for a      │
│ first-time investor on H-1B."                       │
└─────────────────────────────────────────────────────┘
```

**CTA Buttons**
- Primary: "Start Offer Process" → `/transaction/:id`
- Secondary: "Save Property"
- Tertiary: "Ask AI Concierge a Question"

**Contact Card**
- "Questions? Chat with our AI Concierge or schedule a call with a human advisor."
- Chat button, Schedule button (mock)

---

### 4.6 Transaction Concierge (`/transaction/:id`)

#### Purpose
Guide user through offer → financing → closing in a step-by-step flow.

#### Layout
- Vertical timeline/stepper on left (sticky)
- Content area on right
- AI chat panel available as slide-out

#### Steps

**Step 1: Review & Offer**
- Property summary card
- Offer amount input (pre-filled with list price, editable)
- Contingencies checklist: Inspection, Financing, Appraisal
- "Generate Offer" button → mock confirmation

**Step 2: Financing Application**
- Selected lender card (pre-matched DSCR lender)
- Document upload checklist:
  - ☐ Passport / Visa
  - ☐ Employment verification letter
  - ☐ Foreign bank statements (6 months)
  - ☐ Proof of down payment funds
  - ☐ Credit Passport (auto-attached)
- Progress: "Application 60% complete"
- Mock "Submit Application" → success state

**Step 3: Due Diligence**
- Inspection scheduling card (date picker, mock)
- Appraisal status: "Ordered - Est. completion: Jan 15"
- Title search status: "In progress"
- Timeline visualization

**Step 4: Closing Preparation**
- Closing date: Jan 28, 2026
- Closing cost breakdown table
- Wire instructions card (mock, redacted)
- Final checklist before close

**Step 5: Congratulations / Post-Close**
- 🎉 Animation + "You're a property owner!"
- Property added to portfolio
- Property management setup prompt
- "Go to Portfolio" CTA

---

### 4.7 Portfolio Dashboard (`/portfolio`)

#### Purpose
Track owned properties, performance, and growth opportunities.

#### Demo State
Show 1-2 mock "owned" properties to demonstrate the interface.

#### Sections

**Portfolio Summary (Top Row)**
| Metric | Value |
|--------|-------|
| Total Portfolio Value | $285,000 |
| Total Equity | $32,500 |
| Monthly Cash Flow | +$222 |
| Annualized Return | 9.2% |

**Properties Table/Cards**
- Property thumbnail, address, purchase date, current value, equity, monthly cash flow, status (Rented/Vacant)
- Click to expand details

**Performance Chart**
- Line chart (Recharts): Portfolio value over time (mock 12-month data)
- Toggle: Value / Cash Flow / Equity

**AI Portfolio Optimizer**
```
┌─────────────────────────────────────────────────────┐
│ 🤖 AI PORTFOLIO OPTIMIZER                           │
├─────────────────────────────────────────────────────┤
│ OPPORTUNITY DETECTED                                │
│                                                     │
│ Refinance Alert                                     │
│ Your property at 1234 Oak St has gained $15,000     │
│ in equity. If you refinance to a conventional       │
│ loan (now that you have 24 months of U.S. credit    │
│ history), you could:                                │
│ • Lower rate from 7.25% → 6.5%                      │
│ • Save $85/month on mortgage payments               │
│ • Increase cash flow to +$307/month                 │
│                                                     │
│ [Explore Refinance Options]                         │
├─────────────────────────────────────────────────────┤
│ Future Opportunity: 1031 Exchange                   │
│ When your property appreciates further, you may     │
│ qualify for a tax-deferred exchange to scale        │
│ your portfolio.                                     │
│ [Learn About 1031 Exchanges]                        │
└─────────────────────────────────────────────────────┘
```

**Property Management Status**
- Manager: ABC Property Management
- Tenant: Occupied, lease until Aug 2026
- Last rent collected: Jan 1, 2026 - $2,100
- Next scheduled maintenance: None

---

### 4.8 AI Concierge Chat Panel

#### Behavior
- Floating button in bottom-right (all pages post-onboarding)
- Expands to slide-out panel (400px width)
- Chat history persisted in mock state

#### UI Elements
- Header: "ImmiVest AI Concierge" + minimize button
- Chat bubbles (user = right/blue, AI = left/gray)
- Typing indicator animation
- Quick action buttons below input:
  - "Explain DSCR loans"
  - "Find properties"
  - "Check my visa compliance"
  - "Talk to a human"

#### Sample Conversations (Pre-loaded)
```
User: Can I manage the property myself to save on fees?

AI: I understand the appeal of saving on management fees, but for H-1B visa holders, self-managing a rental property is risky. Activities like screening tenants, collecting rent, or coordinating repairs could be considered "unauthorized employment" by USCIS and jeopardize your visa status.

The good news: professional property management (typically 8-10% of rent) keeps your investment 100% passive and visa-compliant. It's a small price for peace of mind and legal protection.

Would you like me to show you properties where the management fee is already factored into positive cash flow?
```

```
User: What's a DSCR loan?

AI: Great question! DSCR stands for Debt Service Coverage Ratio. It's a loan type perfect for immigrant investors because:

• No U.S. credit score required
• No W-2 income verification needed
• Qualification based on the property's rental income

The lender checks if the property's expected rent covers the mortgage payment (DSCR ≥ 1.0 means rent covers the payment). You'll need a larger down payment (25-30%) but it lets you invest immediately without waiting to build U.S. credit.

Your pre-qualification already includes DSCR loan options. Want me to explain the rates you qualify for?
```

---

## 5. Mock Data Specifications

### 5.1 User Profile (Mock)
```json
{
  "id": "user_001",
  "firstName": "Rahul",
  "lastName": "Sharma",
  "email": "rahul.sharma@email.com",
  "visaType": "H-1B",
  "visaExpiration": "2027-09-15",
  "countryOfOrigin": "India",
  "currentCity": "Austin",
  "currentState": "TX",
  "employer": "TechCorp Inc.",
  "yearsInUS": 2,
  "annualIncome": 145000,
  "availableDownPayment": 80000,
  "existingDebt": 12000,
  "hasUSCredit": false,
  "foreignCreditScore": 780,
  "foreignCreditSource": "CIBIL",
  "creditPassportScore": 720,
  "maxBuyingPower": 320000,
  "preQualifiedLoanAmount": 240000,
  "preQualifiedRate": 7.25,
  "onboardingComplete": true,
  "onboardingStep": 4
}
```

### 5.2 Properties (Mock Array - 6 Properties)
```json
[
  {
    "id": "prop_001",
    "address": "1234 Oak Street",
    "city": "Austin",
    "state": "TX",
    "zip": "78745",
    "price": 285000,
    "beds": 3,
    "baths": 2,
    "sqft": 1450,
    "yearBuilt": 2018,
    "propertyType": "Single Family",
    "images": ["placeholder1.jpg", "placeholder2.jpg"],
    "monthlyRent": 2100,
    "propertyTax": 380,
    "insurance": 120,
    "hoa": 0,
    "capRate": 7.8,
    "cashOnCash": 9.2,
    "dscr": 1.28,
    "monthlyCashFlow": 222,
    "visaSafetyScore": 8,
    "visaSafetyFactors": {
      "propertyManagement": { "available": true, "name": "ABC Property Management", "fee": 8, "distance": 5 },
      "turnkey": true,
      "propertyCondition": "Excellent - New HVAC (2023), Roof (2021)",
      "maintenanceLevel": "Low",
      "contractorAvailability": "Moderate"
    },
    "isTurnkey": true,
    "hasManager": true,
    "daysOnMarket": 12,
    "status": "Active"
  },
  {
    "id": "prop_002",
    "address": "5678 Maple Avenue",
    "city": "Houston",
    "state": "TX",
    "zip": "77001",
    "price": 245000,
    "beds": 3,
    "baths": 2,
    "sqft": 1320,
    "yearBuilt": 2015,
    "propertyType": "Single Family",
    "images": ["placeholder3.jpg"],
    "monthlyRent": 1850,
    "propertyTax": 320,
    "insurance": 110,
    "hoa": 0,
    "capRate": 8.1,
    "cashOnCash": 10.1,
    "dscr": 1.35,
    "monthlyCashFlow": 285,
    "visaSafetyScore": 9,
    "visaSafetyFactors": {
      "propertyManagement": { "available": true, "name": "Houston Rentals LLC", "fee": 7, "distance": 3 },
      "turnkey": true,
      "propertyCondition": "Excellent - Recently renovated",
      "maintenanceLevel": "Low",
      "contractorAvailability": "High"
    },
    "isTurnkey": true,
    "hasManager": true,
    "daysOnMarket": 8,
    "status": "Active"
  },
  {
    "id": "prop_003",
    "address": "910 Pine Road",
    "city": "Phoenix",
    "state": "AZ",
    "zip": "85001",
    "price": 310000,
    "beds": 4,
    "baths": 2.5,
    "sqft": 1680,
    "yearBuilt": 2020,
    "propertyType": "Single Family",
    "images": ["placeholder4.jpg"],
    "monthlyRent": 2250,
    "propertyTax": 290,
    "insurance": 100,
    "hoa": 50,
    "capRate": 7.2,
    "cashOnCash": 8.4,
    "dscr": 1.22,
    "monthlyCashFlow": 195,
    "visaSafetyScore": 9,
    "visaSafetyFactors": {
      "propertyManagement": { "available": true, "name": "Desert Property Pros", "fee": 8, "distance": 2 },
      "turnkey": true,
      "propertyCondition": "Like New",
      "maintenanceLevel": "Very Low",
      "contractorAvailability": "High"
    },
    "isTurnkey": true,
    "hasManager": true,
    "daysOnMarket": 5,
    "status": "Active"
  },
  {
    "id": "prop_004",
    "address": "222 Birch Lane",
    "city": "Atlanta",
    "state": "GA",
    "zip": "30301",
    "price": 265000,
    "beds": 3,
    "baths": 2,
    "sqft": 1380,
    "yearBuilt": 2012,
    "propertyType": "Townhouse",
    "images": ["placeholder5.jpg"],
    "monthlyRent": 1950,
    "propertyTax": 280,
    "insurance": 95,
    "hoa": 150,
    "capRate": 7.0,
    "cashOnCash": 8.0,
    "dscr": 1.18,
    "monthlyCashFlow": 165,
    "visaSafetyScore": 10,
    "visaSafetyFactors": {
      "propertyManagement": { "available": true, "name": "Peachtree Management", "fee": 8, "distance": 1 },
      "turnkey": true,
      "propertyCondition": "Excellent",
      "maintenanceLevel": "Very Low - HOA handles exterior",
      "contractorAvailability": "High"
    },
    "isTurnkey": true,
    "hasManager": true,
    "daysOnMarket": 18,
    "status": "Active"
  },
  {
    "id": "prop_005",
    "address": "333 Cedar Court",
    "city": "Dallas",
    "state": "TX",
    "zip": "75201",
    "price": 340000,
    "beds": 4,
    "baths": 3,
    "sqft": 1850,
    "yearBuilt": 2019,
    "propertyType": "Single Family",
    "images": ["placeholder6.jpg"],
    "monthlyRent": 2400,
    "propertyTax": 420,
    "insurance": 130,
    "hoa": 0,
    "capRate": 7.1,
    "cashOnCash": 8.2,
    "dscr": 1.20,
    "monthlyCashFlow": 210,
    "visaSafetyScore": 7,
    "visaSafetyFactors": {
      "propertyManagement": { "available": true, "name": "DFW Rentals", "fee": 9, "distance": 8 },
      "turnkey": true,
      "propertyCondition": "Good - Minor updates recommended",
      "maintenanceLevel": "Moderate",
      "contractorAvailability": "Moderate"
    },
    "isTurnkey": true,
    "hasManager": true,
    "daysOnMarket": 25,
    "status": "Active"
  },
  {
    "id": "prop_006",
    "address": "444 Elm Street",
    "city": "Tampa",
    "state": "FL",
    "zip": "33601",
    "price": 230000,
    "beds": 2,
    "baths": 2,
    "sqft": 1100,
    "yearBuilt": 2016,
    "propertyType": "Condo",
    "images": ["placeholder7.jpg"],
    "monthlyRent": 1700,
    "propertyTax": 240,
    "insurance": 150,
    "hoa": 200,
    "capRate": 6.8,
    "cashOnCash": 7.5,
    "dscr": 1.15,
    "monthlyCashFlow": 130,
    "visaSafetyScore": 10,
    "visaSafetyFactors": {
      "propertyManagement": { "available": true, "name": "Sunshine Property Group", "fee": 8, "distance": 1 },
      "turnkey": true,
      "propertyCondition": "Excellent",
      "maintenanceLevel": "Very Low - Condo association handles most",
      "contractorAvailability": "High"
    },
    "isTurnkey": true,
    "hasManager": true,
    "daysOnMarket": 30,
    "status": "Active"
  }
]
```

### 5.3 Portfolio Properties (Mock - Owned)
```json
[
  {
    "id": "owned_001",
    "propertyId": "prop_001",
    "purchaseDate": "2025-08-15",
    "purchasePrice": 285000,
    "currentValue": 298000,
    "loanBalance": 209500,
    "equity": 88500,
    "monthlyMortgage": 1458,
    "monthlyRent": 2100,
    "monthlyCashFlow": 222,
    "annualizedReturn": 9.2,
    "tenantStatus": "Occupied",
    "leaseEnd": "2026-08-14",
    "propertyManager": "ABC Property Management",
    "lastRentCollected": "2026-01-01"
  }
]
```

---

## 6. Component Library

### 6.1 Buttons
| Variant | Use Case | Style |
|---------|----------|-------|
| Primary | Main CTAs | Navy bg (#1E3A5F), white text, hover darken |
| Secondary | Alternate actions | White bg, navy border, navy text |
| Success | Positive actions | Emerald bg (#10B981), white text |
| Ghost | Tertiary links | Transparent, navy text, underline hover |
| Disabled | Inactive states | Gray bg, muted text, no pointer |

### 6.2 Cards
- **Standard Card**: White bg, 1px border slate-200, rounded-lg, p-6
- **Metric Card**: Same + large number display, subtitle, optional trend indicator
- **Property Card**: Image header, content body, action footer
- **Alert Card**: Colored left border (green/amber/red), icon, message

### 6.3 Form Elements
- **Input**: Border slate-300, rounded-md, focus:ring-2 ring-navy
- **Select**: Same as input with chevron icon
- **Checkbox/Radio**: Custom styled with brand colors
- **Slider**: Track slate-200, thumb navy, fill emerald

### 6.4 Progress Indicators
- **Step Progress**: Horizontal dots/line with labels, current step highlighted
- **Progress Bar**: Thin bar with percentage, emerald fill
- **Loading Spinner**: Navy circle with animated segment

### 6.5 Badges/Pills
- **Status**: Green (Active), Amber (Pending), Red (Issue), Gray (Inactive)
- **Tags**: Rounded-full, small text, various colors for categories
- **Score Badge**: Visa-Safety Score display (segmented bar + number)

---

## 7. Responsive Behavior

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Key Adaptations
| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navigation | Bottom tab bar | Collapsible sidebar | Fixed sidebar |
| Property Grid | 1 column | 2 columns | 3 columns |
| Dashboard Stats | Stacked cards | 2x2 grid | 4-column row |
| Chat Panel | Full screen overlay | Slide-out 60% | Slide-out 400px |
| Forms | Single column | Single column | Two column for some |

---

## 8. Interactions & Animations

### Micro-interactions
- **Button hover**: Subtle scale (1.02) + shadow increase
- **Card hover**: Lift effect (translateY -2px) + shadow-md
- **Form focus**: Ring animation, label float
- **Toggle switches**: Smooth slide with color transition

### Page Transitions
- **Route change**: Fade in (200ms ease)
- **Modal open**: Fade + scale from 0.95
- **Sidebar toggle**: Slide left/right (250ms)

### Loading States
- **Skeleton screens**: Pulse animation on placeholder shapes
- **Progress steps**: Check mark animation on completion
- **Credit import**: Fake progress bar (3 second animation)

### Celebratory
- **Pre-qualification success**: Confetti burst (use canvas-confetti or similar)
- **Transaction complete**: Checkmark draw animation + confetti

---

## 9. Accessibility Requirements

- All interactive elements keyboard accessible
- Focus indicators visible (ring style)
- Color contrast minimum 4.5:1 for text
- Form labels properly associated
- Alt text for all images
- ARIA labels for icon-only buttons
- Skip to main content link
- Reduced motion support via `prefers-reduced-motion`

---

## 10. File Structure (Suggested)

```
/src
  /components
    /ui          # Buttons, Cards, Inputs, etc.
    /layout      # Sidebar, Header, Footer
    /features    # Feature-specific components
      /onboarding
      /properties
      /portfolio
      /chat
  /pages
    Landing.tsx
    Onboarding.tsx (with sub-routes)
    Dashboard.tsx
    Properties.tsx
    PropertyDetail.tsx
    Transaction.tsx
    Portfolio.tsx
  /data
    mockUser.ts
    mockProperties.ts
    mockPortfolio.ts
  /context
    UserContext.tsx
    OnboardingContext.tsx
  /hooks
    useOnboarding.ts
  /utils
    calculations.ts  # Cap rate, cash flow formulas
    formatters.ts    # Currency, date formatting
  /styles
    globals.css      # Tailwind base + custom
  App.tsx
  main.tsx
```

---

## 11. Out of Scope (For Demo)

- Real authentication / user accounts
- Actual API integrations (Nova Credit, Zillow, lenders)
- Payment processing
- Real document upload / storage
- Email notifications
- Real AI/LLM integration (use pre-scripted responses)
- Admin panel
- Multi-language support (future feature)
- Real-time data updates

---

## 12. Success Criteria

The demo prototype is successful if it:

1. **Tells the story**: A viewer can understand ImmiVest's value proposition by clicking through
2. **Looks polished**: Professional, trustworthy aesthetic suitable for investor presentations
3. **Demonstrates the flow**: End-to-end journey from landing to portfolio is navigable
4. **Highlights differentiators**: Credit Bridge and Visa-Safety Score are prominently featured
5. **Feels interactive**: Responsive to clicks, filters work (on mock data), chat panel opens
6. **Runs locally**: Can be demoed on any laptop with `npm run dev`

---

## Appendix A: Key Terminology Glossary

| Term | Definition |
|------|------------|
| **Credit Bridge** | Using foreign credit history to establish U.S. creditworthiness |
| **Credit Passport** | Translated foreign credit score (via Nova Credit) |
| **DSCR Loan** | Debt Service Coverage Ratio loan - qualified by property income, not borrower credit |
| **Cap Rate** | (Annual Net Operating Income / Property Price) × 100 |
| **Cash-on-Cash Return** | (Annual Cash Flow / Cash Invested) × 100 |
| **Visa-Safety Score** | Proprietary metric indicating how easily a property can be owned passively |
| **Turnkey Property** | Move-in ready, often with tenant and management in place |
| **Passive Gap** | The compliance challenge of owning property without active management |
| **1031 Exchange** | Tax-deferred swap of investment properties |

---

## Appendix B: Sample Copy

### Taglines
- "Your Bridge to American Real Estate"
- "Invest Smarter. Stay Compliant. Build Wealth."
- "From Visa Holder to Property Owner"

### Value Props (Short)
- "No U.S. credit? No problem. We bridge your international financial history."
- "Every property rated for visa compliance—so you invest with confidence."
- "AI-powered guidance from your first search to your growing portfolio."

### Error Messages
- "We couldn't verify your foreign credit. Please check your details or try another country."
- "This property exceeds your pre-qualified budget. Adjust your search or increase your down payment."
- "Oops! Something went wrong. Please try again or contact support."

### Success Messages
- "You're pre-qualified! Let's find your first investment property."
- "Offer submitted! We'll notify you when the seller responds."
- "Congratulations! You're officially a property owner. Welcome to your portfolio."

---

*End of PRODUCT_SPEC.md*
