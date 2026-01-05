import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui';
import { Card } from '../../ui/Card';
import { useUser } from '../../../context/UserContext';
import { CheckCircle, Loader2 } from 'lucide-react';

const countries = [
  { name: 'India', provider: 'CIBIL', logo: '🇮🇳' },
  { name: 'China', provider: 'PBOC', logo: '🇨🇳' },
  { name: 'Nigeria', provider: 'CRC', logo: '🇳🇬' },
  { name: 'UK', provider: 'Experian UK', logo: '🇬🇧' },
  { name: 'Canada', provider: 'Equifax CA', logo: '🇨🇦' },
];

export default function CreditStep() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [translationProgress, setTranslationProgress] = useState(0);

  useEffect(() => {
    if (isConnecting) {
      const timer = setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
        updateUser({
          foreignCreditScore: 780,
          foreignCreditSource: 'CIBIL',
          creditPassportScore: 720,
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isConnecting, updateUser]);

  useEffect(() => {
    if (isConnecting) {
      const interval = setInterval(() => {
        setTranslationProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isConnecting]);

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsConnecting(true);
    setTranslationProgress(0);
  };

  const handleContinue = () => {
    navigate('/onboarding/results');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Credit Bridge</h1>
      <p className="text-slate-600 mb-8">
        Connect your international credit history to unlock U.S. buying power.
      </p>

      {!isConnected && (
        <Card className="mb-6">
          <h2 className="text-xl font-bold mb-4">Connect Your International Credit</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {countries.map((country) => (
              <button
                key={country.name}
                onClick={() => handleCountrySelect(country.name)}
                disabled={isConnecting}
                className="p-4 border-2 border-slate-200 rounded-lg hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="text-3xl mb-2">{country.logo}</div>
                <div className="text-sm font-medium">{country.name}</div>
                <div className="text-xs text-slate-500">{country.provider}</div>
              </button>
            ))}
          </div>

          {isConnecting && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Loader2 className="w-5 h-5 text-primary animate-spin" />
                <span className="font-medium">Connecting to {selectedCountry} credit bureau...</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${translationProgress}%` }}
                />
              </div>
            </div>
          )}
        </Card>
      )}

      {isConnected && (
        <>
          <Card className="mb-6 bg-green-50 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-success" />
              <div>
                <h3 className="font-bold">Foreign Credit Score Retrieved</h3>
                <p className="text-slate-600">
                  {user.foreignCreditScore} ({user.foreignCreditSource}, {selectedCountry})
                </p>
              </div>
            </div>
          </Card>

          <Card className="mb-6">
            <h2 className="text-xl font-bold mb-4">Credit Passport Generation</h2>
            <div className="flex items-center justify-between p-6 bg-slate-50 rounded-lg mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-600">{user.foreignCreditScore}</div>
                <div className="text-sm text-slate-500">CIBIL Score</div>
              </div>
              <div className="text-2xl text-primary">→</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{user.creditPassportScore}</div>
                <div className="text-sm text-slate-500">U.S. Equivalent</div>
              </div>
            </div>
            <p className="text-slate-600">
              Your CIBIL score of {user.foreignCreditScore} translates to an estimated U.S. credit 
              equivalent of {user.creditPassportScore}, qualifying you for competitive DSCR loan rates.
            </p>
          </Card>

          <Card>
            <h3 className="font-bold mb-4">Alternative Data Points</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Consistent employment (2+ years)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Strong foreign credit history</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Significant savings/down payment</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-warning">⚠️</span>
                <span>No U.S. rental history (we can work with this)</span>
              </li>
            </ul>
          </Card>

          <div className="flex justify-end pt-6">
            <Button onClick={handleContinue}>Continue to Results</Button>
          </div>
        </>
      )}
    </div>
  );
}

