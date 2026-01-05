import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mockProperties } from '../data/mockProperties';
import { useUser } from '../context/UserContext';
import { formatCurrency, formatPercent } from '../utils/formatters';
import { Heart, CheckCircle, AlertCircle } from 'lucide-react';
import AIConcierge from '../components/features/chat/AIConcierge';

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = mockProperties.find(p => p.id === id);
  const { user } = useUser();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

  const downPayment = property.price * 0.25;
  const loanAmount = property.price - downPayment;
  const monthlyMortgage = 1458; // Mock calculation

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {/* Image Gallery */}
          <div className="relative">
            <div className="h-96 bg-slate-200 relative overflow-hidden">
              <img
                src={property.images[selectedImageIndex]}
                alt={property.address}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop';
                }}
              />
              <div className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-slate-100 transition-colors cursor-pointer shadow-sm">
                <Heart className="w-5 h-5 text-slate-600" />
              </div>
            </div>
            {property.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-primary ring-2 ring-primary/20'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${property.address} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop';
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - 60% */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.address}</h1>
                  <p className="text-xl text-slate-600 mb-4">
                    {property.city}, {property.state} {property.zip}
                  </p>
                  <div className="flex flex-wrap gap-4 text-slate-600">
                    <span>{property.beds} bed</span>
                    <span>•</span>
                    <span>{property.baths} bath</span>
                    <span>•</span>
                    <span>{property.sqft.toLocaleString()} sqft</span>
                    <span>•</span>
                    <span>Built {property.yearBuilt}</span>
                    {property.hoa > 0 && (
                      <>
                        <span>•</span>
                        <span>HOA: {formatCurrency(property.hoa)}/mo</span>
                      </>
                    )}
                  </div>
                </div>

                <Card>
                  <h2 className="text-xl font-bold mb-4">Investment Analysis</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Purchase Price</span>
                      <span className="font-semibold">{formatCurrency(property.price)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Down Payment (25%)</span>
                      <span className="font-semibold">{formatCurrency(downPayment)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Loan Amount</span>
                      <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Est. Interest Rate</span>
                      <span className="font-semibold">{formatPercent(user.preQualifiedRate || 0)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-200">
                      <span className="text-slate-600">Monthly Mortgage</span>
                      <span className="font-semibold">{formatCurrency(monthlyMortgage)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Monthly Rent (Est.)</span>
                      <span className="font-semibold">{formatCurrency(property.monthlyRent)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Property Taxes</span>
                      <span className="font-semibold text-red-600">-{formatCurrency(property.propertyTax)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Insurance</span>
                      <span className="font-semibold text-red-600">-{formatCurrency(property.insurance)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Property Management</span>
                      <span className="font-semibold text-red-600">
                        -{formatCurrency(Math.round(property.monthlyRent * (property.visaSafetyFactors.propertyManagement.fee / 100)))}
                        {' '}({property.visaSafetyFactors.propertyManagement.fee}%)
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Vacancy Reserve</span>
                      <span className="font-semibold text-red-600">
                        -{formatCurrency(Math.round(property.monthlyRent * 0.05))} (5%)
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-600">Maintenance Reserve</span>
                      <span className="font-semibold text-red-600">
                        -{formatCurrency(Math.round(property.monthlyRent * 0.05))} (5%)
                      </span>
                    </div>
                    <div className="flex justify-between py-3 pt-4 border-t-2 border-slate-200">
                      <span className="text-lg font-bold">NET MONTHLY CASH FLOW</span>
                      <span className="text-lg font-bold text-success">
                        +{formatCurrency(property.monthlyCashFlow)}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div>
                        <div className="text-sm text-slate-600">Cap Rate</div>
                        <div className="text-lg font-semibold">{formatPercent(property.capRate)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600">Cash-on-Cash Return</div>
                        <div className="text-lg font-semibold">{formatPercent(property.cashOnCash)}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600">DSCR</div>
                        <div className="text-lg font-semibold">{property.dscr.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h2 className="text-xl font-bold mb-4">Description</h2>
                  <p className="text-slate-600 mb-4">
                    This {property.propertyType.toLowerCase()} property in {property.city} offers excellent 
                    investment potential with strong rental income and low maintenance requirements. 
                    The property is in {property.visaSafetyFactors.propertyCondition.toLowerCase()} condition 
                    and is ideal for passive investors seeking visa-compliant real estate opportunities.
                  </p>
                  <p className="text-slate-600">
                    Located in a desirable neighborhood with easy access to amenities, schools, and 
                    employment centers, this property represents a solid addition to any investment portfolio.
                  </p>
                </Card>

                <Card>
                  <h2 className="text-xl font-bold mb-4">Features & Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Central AC', 'Garage', 'Fenced Yard', 'New Roof', 'Updated Kitchen', 'Hardwood Floors'].map(feature => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-success" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Right Column - 40% */}
              <div className="space-y-6">
                {/* Visa-Safety Score Card */}
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-xl font-bold mb-4">Visa-Safety Score</h2>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {property.visaSafetyScore}/10
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 mb-2">
                      <div
                        className="bg-success h-3 rounded-full"
                        style={{ width: `${(property.visaSafetyScore / 10) * 100}%` }}
                      />
                    </div>
                    <div className="text-lg font-semibold text-success">HIGH SAFETY</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold mb-2">Why this score:</h3>
                      <div className="space-y-3">
                        {property.visaSafetyFactors.propertyManagement.available && (
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">Property Management Available</div>
                              <div className="text-sm text-slate-600">
                                "{property.visaSafetyFactors.propertyManagement.name}" - {property.visaSafetyFactors.propertyManagement.distance} miles away
                              </div>
                              <div className="text-sm text-slate-600">
                                Fee: {property.visaSafetyFactors.propertyManagement.fee}% of rent
                              </div>
                            </div>
                          </div>
                        )}
                        {property.visaSafetyFactors.turnkey && (
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">Turnkey Condition</div>
                              <div className="text-sm text-slate-600">
                                {property.visaSafetyFactors.propertyCondition}
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium">Low Maintenance Property Type</div>
                            <div className="text-sm text-slate-600">
                              {property.propertyType}, {property.visaSafetyFactors.maintenanceLevel.toLowerCase()}
                            </div>
                          </div>
                        </div>
                        {property.visaSafetyFactors.contractorAvailability === 'Moderate' && (
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">Moderate Contractor Availability</div>
                              <div className="text-sm text-slate-600">
                                3 licensed contractors within 15 miles
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm">
                      <div className="font-semibold mb-2">💡 What this means for you:</div>
                      <p className="text-slate-600">
                        This property can be owned 100% passively. Professional management handles 
                        all tenant and maintenance interactions, keeping you visa-safe.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Your Fit Card */}
                <Card>
                  <h2 className="text-xl font-bold mb-4">Your Fit</h2>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Budget Match:</span>
                      <span className="text-success font-semibold">
                        ✅ Under your {formatCurrency(user.maxBuyingPower || 0)} max
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Down Payment:</span>
                      <span className="text-success font-semibold">
                        ✅ {formatCurrency(downPayment)} (you have {formatCurrency(user.availableDownPayment)})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Cash Flow:</span>
                      <span className="text-success font-semibold">
                        ✅ Positive from month 1
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Visa Compliance:</span>
                      <span className="text-success font-semibold">
                        ✅ High safety score
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="text-sm">
                      <div className="font-semibold mb-2">AI Recommendation:</div>
                      <p className="text-slate-600 italic">
                        "Strong match for your profile. The positive cash flow and turnkey condition 
                        minimize risk for a first-time investor on H-1B."
                      </p>
                    </div>
                  </div>
                </Card>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link to={`/transaction/${property.id}`} className="block">
                    <Button className="w-full">Start Offer Process</Button>
                  </Link>
                  <Button variant="secondary" className="w-full">
                    Save Property
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Ask AI Concierge a Question
                  </Button>
                </div>

                {/* Contact Card */}
                <Card>
                  <p className="text-sm text-slate-600 mb-4">
                    Questions? Chat with our AI Concierge or schedule a call with a human advisor.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="secondary" className="flex-1">
                      Chat
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      Schedule
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
      <AIConcierge />
    </div>
  );
}

