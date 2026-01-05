import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Select, Button } from '../../ui';
import { useUser } from '../../../context/UserContext';
import { Card } from '../../ui/Card';
import { formatCurrency } from '../../../utils/formatters';

const creditScoreRanges = [
  { value: '<600', label: '<600' },
  { value: '600-649', label: '600-649' },
  { value: '650-699', label: '650-699' },
  { value: '700-749', label: '700-749' },
  { value: '750+', label: '750+' },
];

export default function FinancialStep() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [formData, setFormData] = useState({
    annualIncome: user.annualIncome || 0,
    availableDownPayment: user.availableDownPayment || 0,
    existingDebt: user.existingDebt || 0,
    hasUSCredit: user.hasUSCredit ? 'yes' : 'no',
    creditScoreRange: '',
    foreignBankAccounts: [] as string[],
    proofOfFunds: 'not-yet',
  });

  const handleChange = (field: string, value: string | number | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (country: string, checked: boolean) => {
    const accounts = formData.foreignBankAccounts;
    if (checked) {
      handleChange('foreignBankAccounts', [...accounts, country]);
    } else {
      handleChange('foreignBankAccounts', accounts.filter(c => c !== country));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({
      annualIncome: formData.annualIncome,
      availableDownPayment: formData.availableDownPayment,
      existingDebt: formData.existingDebt,
      hasUSCredit: formData.hasUSCredit === 'yes',
    });
    navigate('/onboarding/credit');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Financial Profile</h1>
      <p className="text-slate-600 mb-8">
        Help us understand your financial situation to determine your buying power.
      </p>

      <Card className="mb-6 bg-blue-50 border-blue-200">
        <p className="text-sm text-slate-700">
          <strong>Info:</strong> Don't worry if you don't have U.S. credit. Our Credit Bridge 
          uses your international financial history.
        </p>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Annual Gross Income (USD)"
          type="number"
          min="50000"
          value={formData.annualIncome}
          onChange={(e) => handleChange('annualIncome', parseInt(e.target.value) || 0)}
          required
        />

        <Input
          label="Available Down Payment (USD)"
          type="number"
          min="25000"
          value={formData.availableDownPayment}
          onChange={(e) => handleChange('availableDownPayment', parseInt(e.target.value) || 0)}
          required
        />

        <Input
          label="Existing U.S. Debt (USD)"
          type="number"
          min="0"
          value={formData.existingDebt}
          onChange={(e) => handleChange('existingDebt', parseInt(e.target.value) || 0)}
        />

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Do you have a U.S. credit score?
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="hasUSCredit"
                value="yes"
                checked={formData.hasUSCredit === 'yes'}
                onChange={(e) => handleChange('hasUSCredit', e.target.value)}
                className="w-4 h-4 text-primary"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="hasUSCredit"
                value="no"
                checked={formData.hasUSCredit === 'no'}
                onChange={(e) => handleChange('hasUSCredit', e.target.value)}
                className="w-4 h-4 text-primary"
              />
              <span>No</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="hasUSCredit"
                value="not-sure"
                checked={formData.hasUSCredit === 'not-sure'}
                onChange={(e) => handleChange('hasUSCredit', e.target.value)}
                className="w-4 h-4 text-primary"
              />
              <span>Not Sure</span>
            </label>
          </div>
        </div>

        {formData.hasUSCredit === 'yes' && (
          <Select
            label="Approximate Credit Score"
            value={formData.creditScoreRange}
            onChange={(e) => handleChange('creditScoreRange', e.target.value)}
            options={creditScoreRanges}
          />
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Foreign Bank Accounts
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['India', 'China', 'Nigeria', 'UK', 'Canada', 'Other'].map((country) => (
              <label key={country} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.foreignBankAccounts.includes(country)}
                  onChange={(e) => handleCheckboxChange(country, e.target.checked)}
                  className="w-4 h-4 text-primary rounded"
                />
                <span>{country}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Proof of Funds Available
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="proofOfFunds"
                value="yes"
                checked={formData.proofOfFunds === 'yes'}
                onChange={(e) => handleChange('proofOfFunds', e.target.value)}
                className="w-4 h-4 text-primary"
              />
              <span>Yes, ready to upload</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="proofOfFunds"
                value="not-yet"
                checked={formData.proofOfFunds === 'not-yet'}
                onChange={(e) => handleChange('proofOfFunds', e.target.value)}
                className="w-4 h-4 text-primary"
              />
              <span>Not yet</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <Button type="submit">Save & Continue</Button>
        </div>
      </form>
    </div>
  );
}

