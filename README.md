# ImmiVest - AI-Powered Real Estate Concierge for Immigrant Investors

A non-functional, clickable demo prototype that illustrates the end-to-end user journey for immigrant investors (H-1B, L-1, O-1, F-1/OPT visa holders) looking to invest in U.S. real estate.

## Features

- **Credit Bridge**: Translate foreign credit history into U.S. buying power
- **Visa-Safety Score**: Proprietary metric indicating how easily a property can be owned passively
- **AI Concierge**: 24/7 guidance from search to close
- **Property Search**: Filter and browse properties optimized for visa compliance
- **Transaction Concierge**: Step-by-step guide through offer → financing → closing
- **Portfolio Management**: Track owned properties, performance, and growth opportunities

## Tech Stack

- React 18+ with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Recharts for portfolio analytics
- React Router v6 for routing
- React Context for state management

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
/src
  /components
    /ui          # Reusable UI components (Button, Card, Input, etc.)
    /layout      # Layout components (Sidebar, Header)
    /features    # Feature-specific components
      /onboarding
      /properties
      /chat
  /pages         # Page components
  /data          # Mock data
  /context       # React Context providers
  /utils         # Utility functions
  /styles        # Global styles
```

## Demo Flow

1. **Landing Page** (`/`) - Learn about ImmiVest and start onboarding
2. **Onboarding** (`/onboarding/*`) - 4-step flow:
   - Visa Information
   - Financial Profile
   - Credit Bridge
   - Pre-Qualification Results
3. **Dashboard** (`/dashboard`) - Overview of buying power, properties viewed, and recommendations
4. **Properties** (`/properties`) - Search and filter properties
5. **Property Detail** (`/properties/:id`) - View property details with Visa-Safety Score
6. **Transaction** (`/transaction/:id`) - Guide through offer → closing
7. **Portfolio** (`/portfolio`) - Track owned properties and performance

## Mock Data

All data is static and mock. The demo includes:
- Sample user profile (Rahul Sharma, H-1B visa holder)
- 6 sample properties across different cities
- 1 owned property in the portfolio

## Notes

This is a **non-functional prototype** for demonstration purposes. No real API integrations, authentication, or transactions are included.

## License

This is a demo prototype. All rights reserved.

