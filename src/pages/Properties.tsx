import React, { useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import { mockProperties } from '../data/mockProperties';
import { useUser } from '../context/UserContext';
import PropertyCard from '../components/features/properties/PropertyCard';
import { formatCurrency } from '../utils/formatters';
import { X } from 'lucide-react';
import AIConcierge from '../components/features/chat/AIConcierge';

export default function Properties() {
  const { user } = useUser();
  const [properties] = useState(mockProperties);
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: user.maxBuyingPower || 500000,
    propertyTypes: [] as string[],
    bedrooms: [] as number[],
    locations: [] as string[],
    minCapRate: 5,
    minVisaSafety: 7,
    turnkeyOnly: false,
    managerAvailable: true,
  });
  const [sortBy, setSortBy] = useState('best-match');

  const filteredProperties = properties
    .filter(prop => {
      if (prop.price < filters.priceMin || prop.price > filters.priceMax) return false;
      if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(prop.propertyType)) return false;
      if (filters.bedrooms.length > 0 && !filters.bedrooms.includes(prop.beds)) return false;
      if (filters.locations.length > 0 && !filters.locations.includes(prop.city)) return false;
      if (prop.capRate < filters.minCapRate) return false;
      if (prop.visaSafetyScore < filters.minVisaSafety) return false;
      if (filters.turnkeyOnly && !prop.isTurnkey) return false;
      if (filters.managerAvailable && !prop.hasManager) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'cap-rate':
          return b.capRate - a.capRate;
        case 'visa-safety':
          return b.visaSafetyScore - a.visaSafetyScore;
        default:
          return 0;
      }
    });

  const propertyTypes = ['Single Family', 'Condo', 'Townhouse', 'Multi-Family'];
  const locations = ['Austin', 'Houston', 'Dallas', 'Phoenix', 'Atlanta', 'Tampa', 'Charlotte'];

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="flex">
            {/* Filter Sidebar */}
            <div className="w-80 bg-white border-r border-slate-200 p-6 overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Price Range
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      value={filters.priceMin}
                      onChange={(e) => setFilters({ ...filters, priceMin: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      placeholder="Min"
                    />
                    <span className="text-slate-500">-</span>
                    <input
                      type="number"
                      value={filters.priceMax}
                      onChange={(e) => setFilters({ ...filters, priceMax: parseInt(e.target.value) || 500000 })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      placeholder="Max"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Property Type
                  </label>
                  <div className="space-y-2">
                    {propertyTypes.map(type => (
                      <label key={type} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.propertyTypes.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters({ ...filters, propertyTypes: [...filters.propertyTypes, type] });
                            } else {
                              setFilters({ ...filters, propertyTypes: filters.propertyTypes.filter(t => t !== type) });
                            }
                          }}
                          className="w-4 h-4 text-primary rounded"
                        />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Bedrooms
                  </label>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map(beds => (
                      <label key={beds} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.bedrooms.includes(beds)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters({ ...filters, bedrooms: [...filters.bedrooms, beds] });
                            } else {
                              setFilters({ ...filters, bedrooms: filters.bedrooms.filter(b => b !== beds) });
                            }
                          }}
                          className="w-4 h-4 text-primary rounded"
                        />
                        <span className="text-sm">{beds}+</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Location
                  </label>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {locations.map(location => (
                      <label key={location} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.locations.includes(location)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters({ ...filters, locations: [...filters.locations, location] });
                            } else {
                              setFilters({ ...filters, locations: filters.locations.filter(l => l !== location) });
                            }
                          }}
                          className="w-4 h-4 text-primary rounded"
                        />
                        <span className="text-sm">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Min Cap Rate: {filters.minCapRate}%
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="12"
                    value={filters.minCapRate}
                    onChange={(e) => setFilters({ ...filters, minCapRate: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Min Visa-Safety Score: {filters.minVisaSafety}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={filters.minVisaSafety}
                    onChange={(e) => setFilters({ ...filters, minVisaSafety: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.turnkeyOnly}
                      onChange={(e) => setFilters({ ...filters, turnkeyOnly: e.target.checked })}
                      className="w-4 h-4 text-primary rounded"
                    />
                    <span className="text-sm font-medium">Turnkey Only</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.managerAvailable}
                      onChange={(e) => setFilters({ ...filters, managerAvailable: e.target.checked })}
                      className="w-4 h-4 text-primary rounded"
                    />
                    <span className="text-sm font-medium">Property Manager Available</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Property Grid */}
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">
                  Properties ({filteredProperties.length})
                </h1>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
                >
                  <option value="best-match">Best Match</option>
                  <option value="price-low">Price: Low-High</option>
                  <option value="price-high">Price: High-Low</option>
                  <option value="cap-rate">Highest Cap Rate</option>
                  <option value="visa-safety">Highest Visa-Safety</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <AIConcierge />
    </div>
  );
}

