import { Link } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useUser } from '../context/UserContext';
import { mockProperties } from '../data/mockProperties';
import { formatCurrency } from '../utils/formatters';
import { ArrowRight, Home, TrendingUp, CreditCard, Shield } from 'lucide-react';
import PropertyCard from '../components/features/properties/PropertyCard';
import AIConcierge from '../components/features/chat/AIConcierge';

export default function Dashboard() {
  const { user } = useUser();
  const recommendedProperties = mockProperties.slice(0, 3);

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome Banner */}
          <Card className="mb-6 bg-gradient-to-r from-primary to-primary/80 text-white border-0">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">
                  Welcome back, {user.firstName}!
                </h1>
                <p className="opacity-90 mb-4">
                  Your real estate journey is 40% complete.
                </p>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: '40%' }} />
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="opacity-90">Onboarding ✅</span>
                  <span className="opacity-90">Property Search 🔄</span>
                  <span className="opacity-70">Offer</span>
                  <span className="opacity-70">Closing</span>
                  <span className="opacity-70">Ownership</span>
                </div>
              </div>
              <Link to="/properties">
                <Button variant="secondary" className="bg-white text-primary hover:bg-slate-100">
                  Continue to Properties
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Button>
              </Link>
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Buying Power</span>
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {formatCurrency(user.maxBuyingPower || 0)}
              </div>
              <div className="text-xs text-slate-500 mt-1">Pre-qualified</div>
            </Card>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Properties Viewed</span>
                <Home className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-slate-900">12</div>
              <div className="text-xs text-slate-500 mt-1">3 saved</div>
            </Card>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Visa-Safe Matches</span>
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div className="text-2xl font-bold text-slate-900">8</div>
              <div className="text-xs text-slate-500 mt-1">In your budget</div>
            </Card>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Credit Passport</span>
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {user.creditPassportScore || 'N/A'}
              </div>
              <div className="text-xs text-slate-500 mt-1">Good standing</div>
            </Card>
          </div>

          {/* Recommended Properties */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Recommended Properties</h2>
              <Link to="/properties" className="text-primary hover:underline text-sm font-medium">
                View All Properties
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

          {/* Education Module */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">▶</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Learn: DSCR Loans Explained</h3>
                  <p className="text-sm text-slate-600">Watch our 5-minute guide</p>
                </div>
              </div>
            </Card>
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📄</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Read: Visa Compliance Checklist</h3>
                  <p className="text-sm text-slate-600">Essential guide for investors</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
      <AIConcierge />
    </div>
  );
}

