import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const preloadedConversations: { [key: string]: string } = {
  'manage myself': `I understand the appeal of saving on management fees, but for H-1B visa holders, self-managing a rental property is risky. Activities like screening tenants, collecting rent, or coordinating repairs could be considered "unauthorized employment" by USCIS and jeopardize your visa status.

The good news: professional property management (typically 8-10% of rent) keeps your investment 100% passive and visa-compliant. It's a small price for peace of mind and legal protection.

Would you like me to show you properties where the management fee is already factored into positive cash flow?`,
  'dscr': `Great question! DSCR stands for Debt Service Coverage Ratio. It's a loan type perfect for immigrant investors because:

• No U.S. credit score required
• No W-2 income verification needed
• Qualification based on the property's rental income

The lender checks if the property's expected rent covers the mortgage payment (DSCR ≥ 1.0 means rent covers the payment). You'll need a larger down payment (25-30%) but it lets you invest immediately without waiting to build U.S. credit.

Your pre-qualification already includes DSCR loan options. Want me to explain the rates you qualify for?`,
};

const quickActions = [
  'Explain DSCR loans',
  'Find properties',
  'Check my visa compliance',
  'Talk to a human',
];

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm your ImmiVest AI Concierge. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = "I'm here to help! Can you tell me more about what you're looking for?";

      if (lowerInput.includes('manage') || lowerInput.includes('self')) {
        response = preloadedConversations['manage myself'];
      } else if (lowerInput.includes('dscr') || lowerInput.includes('loan')) {
        response = preloadedConversations['dscr'];
      } else if (lowerInput.includes('property') || lowerInput.includes('find')) {
        response = "I can help you find properties! Would you like to search by location, price range, or visa-safety score?";
      } else if (lowerInput.includes('visa') || lowerInput.includes('compliance')) {
        response = "Your visa compliance is important! Based on your H-1B status, I recommend focusing on turnkey properties with professional management. Would you like me to show you properties with high visa-safety scores?";
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
      };

      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center z-50"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl border border-slate-200 flex flex-col z-50">
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              <h3 className="font-bold">ImmiVest AI Concierge</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-slate-100 rounded transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-slate-900'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.role === 'assistant' && (
                      <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-slate-200">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickActions.map((action) => (
                <button
                  key={action}
                  onClick={() => handleQuickAction(action)}
                  className="text-xs px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

