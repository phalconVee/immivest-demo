import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Card } from '../../ui/Card';
import { Property } from '../../../data/mockProperties';
import { formatCurrency, formatPercent } from '../../../utils/formatters';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const visaSafetyBars = Math.round(property.visaSafetyScore);

  return (
    <Card hover className="overflow-hidden">
      <Link to={`/properties/${property.id}`}>
        <div className="relative aspect-video bg-slate-200 mb-4 rounded-t-lg overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.address}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop';
            }}
          />
          <div className="absolute top-2 left-2 bg-success text-white text-xs font-semibold px-2 py-1 rounded">
            NEW
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-slate-100 transition-colors shadow-sm"
          >
            <Heart className="w-4 h-4 text-slate-600" />
          </button>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-slate-900">
              {formatCurrency(property.price)}
            </span>
            <span className="text-sm font-semibold text-success">
              Cap: {formatPercent(property.capRate)}
            </span>
          </div>
          <div className="text-slate-600 mb-2">
            {property.beds} bed • {property.baths} bath • {property.sqft.toLocaleString()} sqft
          </div>
          <div className="text-slate-600 mb-4">
            {property.address}, {property.city}, {property.state}
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-slate-700">Visa-Safety:</span>
              <span className="text-sm font-semibold">{property.visaSafetyScore}/10</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-success h-2 rounded-full"
                style={{ width: `${(property.visaSafetyScore / 10) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {property.isTurnkey && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                ✅ Turnkey
              </span>
            )}
            {property.hasManager && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                ✅ Manager Available
              </span>
            )}
          </div>
          <div className="pt-4 border-t border-slate-200">
            <div className="text-sm">
              <span className="text-slate-600">Est. Monthly Cash Flow: </span>
              <span className="font-semibold text-success">
                +{formatCurrency(property.monthlyCashFlow)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
}

