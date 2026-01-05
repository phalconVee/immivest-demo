import React, { useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockPortfolio } from '../data/mockPortfolio';
import { mockProperties } from '../data/mockProperties';
import { formatCurrency, formatPercent, formatDate } from '../utils/formatters';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Home, DollarSign, BarChart3 } from 'lucide-react';
import AIConcierge from '../components/features/chat/AIConcierge';

// Mock portfolio performance data
const performanceData = [
  { month: 'Aug', value: 285000, cashFlow: 222, equity: 75500 },
  { month: 'Sep', value: 287000, cashFlow: 222, equity: 77000 },
  { month: 'Oct', value: 289000, cashFlow: 222, equity: 78500 },
  { month: 'Nov', value: 291000, cashFlow: 222, equity: 80000 },
  { month: 'Dec', value: 293000, cashFlow: 222, equity: 81500 },
  { month: 'Jan', value: 298000, cashFlow: 222, equity: 88500 },
];

export default function Portfolio() {
  const [chartType, setChartType] = useState<'value' | 'cashFlow' | 'equity'>('value');
  const portfolioProperty = mockPortfolio[0];
  const property = mockProperties.find(p => p.id === portfolioProperty.propertyId);

  if (!property || !portfolioProperty) {
    return null;
  }

  const totalPortfolioValue = portfolioProperty.currentValue;
  const totalEquity = portfolioProperty.equity;
  const totalMonthlyCashFlow = portfolioProperty.monthlyCashFlow;
  const annualizedReturn = portfolioProperty.annualizedReturn;

  const chartData = performanceData.map(d => ({
    month: d.month,
    value: d[chartType],
  }));

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Portfolio</h1>

          {/* Portfolio Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Total Portfolio Value</span>
                <Home className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {formatCurrency(totalPortfolioValue)}
              </div>
            </Card>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Total Equity</span>
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {formatCurrency(totalEquity)}
              </div>
            </Card>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Monthly Cash Flow</span>
                <DollarSign className="w-5 h-5 text-success" />
              </div>
              <div className="text-2xl font-bold text-success">
                +{formatCurrency(totalMonthlyCashFlow)}
              </div>
            </Card>
            <Card>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Annualized Return</span>
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-slate-900">
                {formatPercent(annualizedReturn)}
              </div>
            </Card>
          </div>

          {/* Properties Table */}
          <Card className="mb-6">
            <h2 className="text-xl font-bold mb-4">Your Properties</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold">Property</th>
                    <th className="text-left py-3 px-4 font-semibold">Purchase Date</th>
                    <th className="text-right py-3 px-4 font-semibold">Current Value</th>
                    <th className="text-right py-3 px-4 font-semibold">Equity</th>
                    <th className="text-right py-3 px-4 font-semibold">Monthly Cash Flow</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <div className="font-medium">{property.address}</div>
                      <div className="text-sm text-slate-600">{property.city}, {property.state}</div>
                    </td>
                    <td className="py-3 px-4">{formatDate(portfolioProperty.purchaseDate)}</td>
                    <td className="text-right py-3 px-4 font-semibold">
                      {formatCurrency(portfolioProperty.currentValue)}
                    </td>
                    <td className="text-right py-3 px-4 font-semibold text-success">
                      {formatCurrency(portfolioProperty.equity)}
                    </td>
                    <td className="text-right py-3 px-4 font-semibold text-success">
                      +{formatCurrency(portfolioProperty.monthlyCashFlow)}
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                        {portfolioProperty.tenantStatus}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Performance Chart */}
          <Card className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Portfolio Performance</h2>
              <div className="flex gap-2">
                {(['value', 'cashFlow', 'equity'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setChartType(type)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      chartType === type
                        ? 'bg-primary text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {type === 'value' ? 'Value' : type === 'cashFlow' ? 'Cash Flow' : 'Equity'}
                  </button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1E3A5F"
                  strokeWidth={2}
                  dot={{ fill: '#1E3A5F', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* AI Portfolio Optimizer */}
          <Card className="mb-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="flex items-start gap-3 mb-4">
              <div className="text-2xl">🤖</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">AI Portfolio Optimizer</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <h3 className="font-semibold mb-2">OPPORTUNITY DETECTED</h3>
                    <h4 className="font-medium mb-2">Refinance Alert</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      Your property at {property.address} has gained {formatCurrency(13000)} in equity. 
                      If you refinance to a conventional loan (now that you have 24 months of U.S. credit 
                      history), you could:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-600 mb-3">
                      <li>• Lower rate from {formatPercent(7.25)} → {formatPercent(6.5)}</li>
                      <li>• Save {formatCurrency(85)}/month on mortgage payments</li>
                      <li>• Increase cash flow to +{formatCurrency(307)}/month</li>
                    </ul>
                    <Button variant="secondary" className="text-sm">
                      Explore Refinance Options
                    </Button>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <h4 className="font-medium mb-2">Future Opportunity: 1031 Exchange</h4>
                    <p className="text-sm text-slate-600 mb-3">
                      When your property appreciates further, you may qualify for a tax-deferred 
                      exchange to scale your portfolio.
                    </p>
                    <Button variant="ghost" className="text-sm">
                      Learn About 1031 Exchanges
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Property Management Status */}
          <Card>
            <h2 className="text-xl font-bold mb-4">Property Management Status</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Manager:</span>
                <span className="font-semibold">{portfolioProperty.propertyManager}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Tenant:</span>
                <span className="font-semibold">
                  {portfolioProperty.tenantStatus}, lease until {formatDate(portfolioProperty.leaseEnd)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Last rent collected:</span>
                <span className="font-semibold">
                  {formatDate(portfolioProperty.lastRentCollected)} - {formatCurrency(portfolioProperty.monthlyRent)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Next scheduled maintenance:</span>
                <span className="font-semibold">None</span>
              </div>
            </div>
          </Card>
        </main>
      </div>
      <AIConcierge />
    </div>
  );
}

