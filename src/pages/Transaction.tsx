import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockProperties } from '../data/mockProperties';
import { formatCurrency } from '../utils/formatters';
import { CheckCircle, FileText, DollarSign, Home, Calendar } from 'lucide-react';
import AIConcierge from '../components/features/chat/AIConcierge';

const steps = [
  { id: 1, name: 'Review & Offer', icon: FileText },
  { id: 2, name: 'Financing Application', icon: DollarSign },
  { id: 3, name: 'Due Diligence', icon: Calendar },
  { id: 4, name: 'Closing Preparation', icon: FileText },
  { id: 5, name: 'Congratulations', icon: Home },
];

export default function Transaction() {
  const { id } = useParams<{ id: string }>();
  const property = mockProperties.find(p => p.id === id);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [offerAmount, setOfferAmount] = useState(property?.price || 0);
  const [documents, setDocuments] = useState({
    passport: false,
    employment: false,
    bankStatements: false,
    proofOfFunds: false,
    creditPassport: true, // Auto-attached
  });

  if (!property) {
    return (
      <div className="flex h-screen bg-slate-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            <p>Property not found</p>
          </main>
        </div>
      </div>
    );
  }

  const documentProgress = Object.values(documents).filter(Boolean).length;
  const documentTotal = Object.keys(documents).length;

  const handleStepComplete = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/portfolio');
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex gap-8">
              {/* Timeline */}
              <div className="w-64 flex-shrink-0">
                <div className="sticky top-8">
                  <h2 className="text-xl font-bold mb-6">Transaction Steps</h2>
                  <div className="space-y-4">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      const isActive = currentStep === step.id;
                      const isComplete = currentStep > step.id;
                      return (
                        <div key={step.id} className="flex items-start gap-3">
                          <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              isComplete ? 'bg-success text-white' :
                              isActive ? 'bg-primary text-white' :
                              'bg-slate-200 text-slate-500'
                            }`}>
                              {isComplete ? (
                                <CheckCircle className="w-6 h-6" />
                              ) : (
                                <Icon className="w-5 h-5" />
                              )}
                            </div>
                            {index < steps.length - 1 && (
                              <div className={`w-0.5 h-12 ${
                                isComplete ? 'bg-success' : 'bg-slate-200'
                              }`} />
                            )}
                          </div>
                          <div className="flex-1 pt-1">
                            <div className={`font-medium ${
                              isActive ? 'text-primary' : isComplete ? 'text-slate-900' : 'text-slate-500'
                            }`}>
                              {step.name}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h1 className="text-3xl font-bold">Review & Offer</h1>
                    <Card>
                      <h2 className="text-xl font-bold mb-4">Property Summary</h2>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Address:</span>
                          <span className="font-semibold">{property.address}, {property.city}, {property.state}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">List Price:</span>
                          <span className="font-semibold">{formatCurrency(property.price)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Property Type:</span>
                          <span className="font-semibold">{property.propertyType}</span>
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <h2 className="text-xl font-bold mb-4">Make an Offer</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Offer Amount
                          </label>
                          <input
                            type="number"
                            value={offerAmount}
                            onChange={(e) => setOfferAmount(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-2 border border-slate-300 rounded-md"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Contingencies
                          </label>
                          <div className="space-y-2">
                            {['Inspection', 'Financing', 'Appraisal'].map(contingency => (
                              <label key={contingency} className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  className="w-4 h-4 text-primary rounded"
                                />
                                <span>{contingency}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <Button onClick={handleStepComplete}>Generate Offer</Button>
                      </div>
                    </Card>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h1 className="text-3xl font-bold">Financing Application</h1>
                    <Card>
                      <h2 className="text-xl font-bold mb-4">Selected Lender</h2>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <div className="font-semibold mb-2">DSCR Loan Provider</div>
                        <div className="text-sm text-slate-600">
                          Pre-matched based on your Credit Passport score
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <h2 className="text-xl font-bold mb-4">Document Upload</h2>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={documents.passport}
                              onChange={(e) => setDocuments({ ...documents, passport: e.target.checked })}
                              className="w-5 h-5 text-primary rounded"
                            />
                            <span>Passport / Visa</span>
                          </div>
                          <Button variant="ghost" className="text-sm">Upload</Button>
                        </div>
                        <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={documents.employment}
                              onChange={(e) => setDocuments({ ...documents, employment: e.target.checked })}
                              className="w-5 h-5 text-primary rounded"
                            />
                            <span>Employment verification letter</span>
                          </div>
                          <Button variant="ghost" className="text-sm">Upload</Button>
                        </div>
                        <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={documents.bankStatements}
                              onChange={(e) => setDocuments({ ...documents, bankStatements: e.target.checked })}
                              className="w-5 h-5 text-primary rounded"
                            />
                            <span>Foreign bank statements (6 months)</span>
                          </div>
                          <Button variant="ghost" className="text-sm">Upload</Button>
                        </div>
                        <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={documents.proofOfFunds}
                              onChange={(e) => setDocuments({ ...documents, proofOfFunds: e.target.checked })}
                              className="w-5 h-5 text-primary rounded"
                            />
                            <span>Proof of down payment funds</span>
                          </div>
                          <Button variant="ghost" className="text-sm">Upload</Button>
                        </div>
                        <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg bg-green-50">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-success" />
                            <span>Credit Passport (auto-attached)</span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-slate-200">
                        <div className="text-sm text-slate-600 mb-2">
                          Application {Math.round((documentProgress / documentTotal) * 100)}% complete
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${(documentProgress / documentTotal) * 100}%` }}
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button onClick={handleStepComplete}>Submit Application</Button>
                      </div>
                    </Card>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h1 className="text-3xl font-bold">Due Diligence</h1>
                    <Card>
                      <h2 className="text-xl font-bold mb-4">Inspection</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Schedule Inspection
                          </label>
                          <input
                            type="date"
                            className="w-full px-4 py-2 border border-slate-300 rounded-md"
                          />
                        </div>
                        <Button variant="secondary">Schedule</Button>
                      </div>
                    </Card>
                    <Card>
                      <h2 className="text-xl font-bold mb-4">Status</h2>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Appraisal</span>
                          <span className="text-sm text-slate-600">Ordered - Est. completion: Jan 15</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="font-medium">Title Search</span>
                          <span className="text-sm text-slate-600">In progress</span>
                        </div>
                      </div>
                    </Card>
                    <Button onClick={handleStepComplete}>Continue</Button>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h1 className="text-3xl font-bold">Closing Preparation</h1>
                    <Card>
                      <h2 className="text-xl font-bold mb-4">Closing Details</h2>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Closing Date:</span>
                          <span className="font-semibold">January 28, 2026</span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-3">Closing Cost Breakdown</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Loan Origination</span>
                          <span>{formatCurrency(2000)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Title Insurance</span>
                          <span>{formatCurrency(1500)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Appraisal</span>
                          <span>{formatCurrency(500)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Inspection</span>
                          <span>{formatCurrency(400)}</span>
                        </div>
                        <div className="flex justify-between font-semibold pt-2 border-t border-slate-200">
                          <span>Total Closing Costs</span>
                          <span>{formatCurrency(4400)}</span>
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <h2 className="text-xl font-bold mb-4">Wire Instructions</h2>
                      <div className="p-4 bg-slate-50 rounded-lg text-sm">
                        <p className="text-slate-600 mb-2">Wire instructions will be provided by your closing agent.</p>
                        <p className="text-slate-500 italic">[Mock - Redacted for security]</p>
                      </div>
                    </Card>
                    <Button onClick={handleStepComplete}>Proceed to Closing</Button>
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-6 text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h1 className="text-4xl font-bold">You're a Property Owner!</h1>
                    <p className="text-xl text-slate-600 mb-8">
                      Congratulations on your first investment property!
                    </p>
                    <Card className="max-w-md mx-auto">
                      <h2 className="text-xl font-bold mb-4">Next Steps</h2>
                      <div className="space-y-3 text-left">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span>Property added to your portfolio</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span>Property management setup in progress</span>
                        </div>
                      </div>
                    </Card>
                    <Link to="/portfolio">
                      <Button>Go to Portfolio</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <AIConcierge />
    </div>
  );
}

