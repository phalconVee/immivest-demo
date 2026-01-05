import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';

export default function Settings() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Settings</h1>
          <Card>
            <p className="text-slate-600">Settings page - placeholder</p>
          </Card>
        </main>
      </div>
    </div>
  );
}

