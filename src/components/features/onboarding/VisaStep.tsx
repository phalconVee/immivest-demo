import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Select, Button } from '../../ui';
import { useUser } from '../../../context/UserContext';
import { Card } from '../../ui/Card';

const visaTypes = [
  { value: 'H-1B', label: 'H-1B' },
  { value: 'H-4 (EAD)', label: 'H-4 (EAD)' },
  { value: 'L-1A', label: 'L-1A' },
  { value: 'L-1B', label: 'L-1B' },
  { value: 'O-1', label: 'O-1' },
  { value: 'F-1 (OPT)', label: 'F-1 (OPT)' },
  { value: 'F-1 (CPT)', label: 'F-1 (CPT)' },
  { value: 'Other', label: 'Other' },
];

const states = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'
].map(state => ({ value: state, label: state }));

export default function VisaStep() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [formData, setFormData] = useState({
    visaType: user.visaType || '',
    visaStartDate: '',
    visaExpirationDate: user.visaExpiration || '',
    countryOfOrigin: user.countryOfOrigin || '',
    currentState: user.currentState || '',
    currentCity: user.currentCity || '',
    employer: user.employer || '',
    yearsInUS: user.yearsInUS || 0,
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(formData);
    navigate('/onboarding/financial');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Visa Information</h1>
      <p className="text-slate-600 mb-8">
        Tell us about your visa status to help us match you with compliant financing options.
      </p>

      <Card className="mb-6 bg-blue-50 border-blue-200">
        <p className="text-sm text-slate-700">
          <strong>Info:</strong> Your visa type helps us match you with compliant financing options 
          and calculate your Visa-Safety Score.
        </p>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Select
          label="Visa Type"
          value={formData.visaType}
          onChange={(e) => handleChange('visaType', e.target.value)}
          options={visaTypes}
          required
        />

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Visa Start Date"
            type="date"
            value={formData.visaStartDate}
            onChange={(e) => handleChange('visaStartDate', e.target.value)}
            required
          />
          <Input
            label="Visa Expiration Date"
            type="date"
            value={formData.visaExpirationDate}
            onChange={(e) => handleChange('visaExpirationDate', e.target.value)}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="Country of Origin"
            value={formData.countryOfOrigin}
            onChange={(e) => handleChange('countryOfOrigin', e.target.value)}
            required
          />
          <Select
            label="Current U.S. State"
            value={formData.currentState}
            onChange={(e) => handleChange('currentState', e.target.value)}
            options={states}
            required
          />
        </div>

        <Input
          label="Current City"
          value={formData.currentCity}
          onChange={(e) => handleChange('currentCity', e.target.value)}
          required
        />

        <Input
          label="Employer Name (Optional)"
          value={formData.employer}
          onChange={(e) => handleChange('employer', e.target.value)}
        />

        <Input
          label="Years in U.S."
          type="number"
          min="0"
          max="50"
          value={formData.yearsInUS}
          onChange={(e) => handleChange('yearsInUS', parseInt(e.target.value) || 0)}
          required
        />

        <div className="flex justify-end pt-4">
          <Button type="submit">Save & Continue</Button>
        </div>
      </form>
    </div>
  );
}

