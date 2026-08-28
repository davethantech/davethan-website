'use client';

import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setMessage('Thanks for subscribing!');
      setEmail('');
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Failed to subscribe.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex mt-2 relative">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
          required
          disabled={status === 'loading' || status === 'success'}
          className="w-full bg-[#131640] border border-[rgba(255,255,255,0.1)] rounded-l-[8px] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#06bae1] transition-colors font-inter text-[14px] disabled:opacity-60"
        />
        <button 
          type="submit" 
          disabled={status === 'loading' || status === 'success'}
          className="bg-[#06bae1] text-[#0a0d53] font-bold font-inter px-6 py-3 rounded-r-[8px] hover:opacity-90 transition-opacity flex items-center justify-center min-w-[60px] disabled:opacity-60 disabled:hover:opacity-60"
        >
          {status === 'loading' ? (
            <Loader2 className="w-4 h-4 animate-spin text-[#0a0d53]" />
          ) : status === 'success' ? (
            <CheckCircle className="w-4 h-4 text-[#0a0d53]" />
          ) : (
            <span>&rarr;</span>
          )}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-2 text-[#06bae1] font-inter text-[12px] flex items-center gap-1">
          <CheckCircle className="w-3 h-3" /> {message}
        </p>
      )}

      {status === 'error' && (
        <p className="mt-2 text-red-400 font-inter text-[12px] flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {message}
        </p>
      )}
    </div>
  );
}
