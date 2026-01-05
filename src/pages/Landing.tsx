import { Link } from 'react-router-dom';
import { CreditCard, Search, Home, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold text-primary">ImmiVest</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-slate-700 hover:text-primary transition-colors">How It Works</a>
            <a href="#features" className="text-slate-700 hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-slate-700 hover:text-primary transition-colors">About</a>
          </div>
          <Link to="/onboarding/visa">
            <Button>Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl -z-10"></div>
        <div className="absolute inset-0 opacity-10 -z-10">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop"
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 text-balance">
            Build Wealth in American Real Estate—Even Without U.S. Credit
          </h1>
          <p className="text-xl text-slate-600 mb-8 text-balance">
            ImmiVest bridges your international financial history to unlock property investments. 
            AI-powered. Visa-compliant. Designed for immigrants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding/visa">
              <Button className="text-lg px-8 py-4">
                Start Your Journey
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="secondary" className="text-lg px-8 py-4">
                See How It Works
              </Button>
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Trusted by 500+ H-1B investors</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Visa-compliant investments</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Credit Bridge</h3>
              <p className="text-slate-600">
                We translate your foreign credit history into U.S. buying power
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
              <p className="text-slate-600">
                AI finds properties optimized for your budget and visa compliance
              </p>
            </Card>
            <Card className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Passive Ownership</h3>
              <p className="text-slate-600">
                Professional management keeps your investment hands-off and visa-safe
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold mb-2">AI Concierge</h3>
              <p className="text-slate-600">24/7 guidance from search to close</p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-2">Visa-Safety Score</h3>
              <p className="text-slate-600">Know which properties are compliant</p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-2">DSCR Financing</h3>
              <p className="text-slate-600">No U.S. credit? No problem.</p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold mb-2">Portfolio Growth</h3>
              <p className="text-slate-600">Refinance alerts, 1031 exchange guidance</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <p className="text-slate-600 mb-4 italic">
                "ImmiVest helped me buy my first rental property 6 months after arriving on my H-1B. 
                The Visa-Safety Score gave me peace of mind."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full"></div>
                <div>
                  <p className="font-semibold">Priya S.</p>
                  <p className="text-sm text-slate-500">H-1B, Software Engineer</p>
                </div>
              </div>
            </Card>
            <Card>
              <p className="text-slate-600 mb-4 italic">
                "The Credit Bridge feature was a game-changer. I got pre-qualified in days, not years."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full"></div>
                <div>
                  <p className="font-semibold">Carlos M.</p>
                  <p className="text-sm text-slate-500">L-1B, Product Manager</p>
                </div>
              </div>
            </Card>
            <Card>
              <p className="text-slate-600 mb-4 italic">
                "Finally, a platform that understands the unique challenges of immigrant investors."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full"></div>
                <div>
                  <p className="font-semibold">Wei L.</p>
                  <p className="text-sm text-slate-500">O-1, Data Scientist</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="bg-primary text-white border-0">
            <h2 className="text-3xl font-bold mb-4">Ready to invest in your American dream?</h2>
            <p className="text-lg mb-8 opacity-90">
              Get pre-qualified in 5 minutes and start browsing properties today.
            </p>
            <Link to="/onboarding/visa">
              <Button variant="secondary" className="bg-white text-primary hover:bg-slate-100">
                Get Pre-Qualified in 5 Minutes
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">I</span>
                </div>
                <span className="text-xl font-bold">ImmiVest</span>
              </div>
              <p className="text-slate-400 text-sm">Your Bridge to American Real Estate</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {/* Social icons placeholder */}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            © 2025 ImmiVest. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

