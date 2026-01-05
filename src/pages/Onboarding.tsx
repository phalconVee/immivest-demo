import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import VisaStep from '../components/features/onboarding/VisaStep';
import FinancialStep from '../components/features/onboarding/FinancialStep';
import CreditStep from '../components/features/onboarding/CreditStep';
import ResultsStep from '../components/features/onboarding/ResultsStep';
import { useUser } from '../context/UserContext';

const steps = [
  { path: 'visa', label: 'Visa Info', component: VisaStep },
  { path: 'financial', label: 'Financial Profile', component: FinancialStep },
  { path: 'credit', label: 'Credit Bridge', component: CreditStep },
  { path: 'results', label: 'Your Results', component: ResultsStep },
];

export default function Onboarding() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();

  const currentStepIndex = steps.findIndex(
    step => location.pathname.includes(step.path)
  );
  const currentStep = currentStepIndex >= 0 ? currentStepIndex + 1 : 1;

  const handleBack = () => {
    if (currentStepIndex > 0) {
      navigate(`/onboarding/${steps[currentStepIndex - 1].path}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Progress Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">
              Step {currentStep} of {steps.length}
            </span>
            {currentStepIndex > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}
          </div>
          <div className="flex gap-2">
            {steps.map((step, index) => (
              <div
                key={step.path}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  index < currentStep
                    ? 'bg-success'
                    : index === currentStepIndex
                    ? 'bg-primary'
                    : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-500">
            {steps.map((step) => (
              <span key={step.path}>{step.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Routes>
          <Route path="visa" element={<VisaStep />} />
          <Route path="financial" element={<FinancialStep />} />
          <Route path="credit" element={<CreditStep />} />
          <Route path="results" element={<ResultsStep />} />
          <Route path="*" element={<Navigate to="visa" replace />} />
        </Routes>
      </div>
    </div>
  );
}

