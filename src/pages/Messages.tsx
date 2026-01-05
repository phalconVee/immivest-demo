import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { Card } from '../components/ui/Card';
import AIConcierge from '../components/features/chat/AIConcierge';

export default function Messages() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Messages</h1>
          <Card>
            <p className="text-slate-600 mb-4">
              Use the AI Concierge chat in the bottom-right corner to get help with your real estate journey.
            </p>
            <p className="text-sm text-slate-500">
              The AI Concierge can help you understand DSCR loans, find properties, check visa compliance, and more.
            </p>
          </Card>
        </main>
      </div>
      <AIConcierge />
    </div>
  );
}

