import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui';
import { Card } from '../../ui/Card';
import { useUser } from '../../../context/UserContext';
import { formatCurrency, formatPercent } from '../../../utils/formatters';
import { Download } from 'lucide-react';

export default function ResultsStep() {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleDownload = () => {
    // Mock PDF download
    alert('Pre-qualification letter would be downloaded here');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Pre-Qualification Results</h1>
      <p className="text-slate-600 mb-8">
        Congratulations! Here's what you're qualified for.
      </p>

      <Card className="mb-6 bg-gradient-to-br from-primary to-primary/80 text-white border-0">
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🎉</div>
          <h2 className="text-2xl font-bold mb-2">
            Congratulations, {user.firstName}!
          </h2>
          <p className="text-lg opacity-90">You're Pre-Qualified for:</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
          <div className="text-5xl font-bold mb-2">
            {formatCurrency(user.maxBuyingPower || 0)}
          </div>
          <div className="text-lg opacity-90">Maximum Property Value</div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="opacity-90">Down Payment:</span>
            <span className="font-semibold">
              {formatCurrency(user.availableDownPayment)} (25%)
            </span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-90">Loan Amount:</span>
            <span className="font-semibold">
              {formatCurrency(user.preQualifiedLoanAmount || 0)} (DSCR Loan)
            </span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-90">Est. Interest Rate:</span>
            <span className="font-semibold">
              {formatPercent(user.preQualifiedRate || 0)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="opacity-90">Monthly Payment:</span>
            <span className="font-semibold">~{formatCurrency(1640)}</span>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="text-sm">
            <div className="mb-2">
              <span className="opacity-90">Your Credit Passport Score: </span>
              <span className="font-semibold">{user.creditPassportScore}</span>
            </div>
            <div>
              <span className="opacity-90">Visa-Safety Recommendation: </span>
              <span className="font-semibold">
                Focus on turnkey properties with professional management
              </span>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="text-xl font-bold mb-4">Financing Options Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold">Option</th>
                <th className="text-center py-3 px-4 font-semibold">DSCR Loan</th>
                <th className="text-center py-3 px-4 font-semibold">Foreign National</th>
                <th className="text-center py-3 px-4 font-semibold">Conventional (Future)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4">Requires U.S. Credit</td>
                <td className="text-center py-3 px-4">❌ No</td>
                <td className="text-center py-3 px-4">❌ No</td>
                <td className="text-center py-3 px-4">✅ Yes</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4">Down Payment</td>
                <td className="text-center py-3 px-4">25%</td>
                <td className="text-center py-3 px-4">30%</td>
                <td className="text-center py-3 px-4">20%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4">Interest Rate</td>
                <td className="text-center py-3 px-4">{formatPercent(7.25)}</td>
                <td className="text-center py-3 px-4">{formatPercent(7.75)}</td>
                <td className="text-center py-3 px-4">{formatPercent(6.5)}</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Your Eligibility</td>
                <td className="text-center py-3 px-4">
                  <span className="text-success font-semibold">✅ Eligible Now</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="text-success font-semibold">✅ Eligible Now</span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="text-slate-500">🔜 After 2 years</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-end">
        <Button variant="secondary" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2 inline" />
          Download Pre-Qualification Letter
        </Button>
        <Button onClick={() => navigate('/properties')}>
          Browse Properties
        </Button>
      </div>
    </div>
  );
}

