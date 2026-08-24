'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function CareersForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'careers', ...fields }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed.');
      }

      setFormState('success');
      setFields({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setErrorMessage(message);
      setFormState('error');
    }
  };

  const inputClass =
    'w-full h-[52px] px-6 bg-[#f8f9fc] rounded-[8px] text-[#0a0d53] font-inter text-[14px] placeholder:text-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#06bae1] transition-all disabled:opacity-60';

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-10 px-8">
        <div className="w-[64px] h-[64px] rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle className="w-9 h-9 text-green-500" />
        </div>
        <h3 className="text-[#0a0d53] font-roboto font-bold text-[20px]">Application Sent!</h3>
        <p className="text-[#5b6472] font-inter text-[14px] max-w-[360px]">
          Thank you for your interest in joining Davethan. We will review your message and reach out soon.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-2 text-[#06bae1] font-inter font-bold text-[13px] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Your Name*"
        required
        value={fields.name}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className={inputClass}
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email*"
        required
        value={fields.email}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className={inputClass}
      />
      <input
        name="subject"
        type="text"
        placeholder="Position of Interest"
        value={fields.subject}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows={4}
        value={fields.message}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className="w-full p-6 bg-[#f8f9fc] rounded-[8px] text-[#0a0d53] font-inter text-[14px] placeholder:text-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#06bae1] transition-all resize-none disabled:opacity-60"
      />

      {formState === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 font-inter text-[13px] rounded-[8px] px-5 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={formState === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#06bae1] hover:bg-[#05a6c9] disabled:bg-[#9ca3af] text-[#0a0d53] font-inter font-bold text-[13px] tracking-widest uppercase px-8 py-4 rounded-[8px] transition-colors mt-2"
      >
        {formState === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          'SEND MESSAGE'
        )}
      </button>
    </form>
  );
}
