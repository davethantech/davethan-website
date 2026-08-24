'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface ContactFormProps {
  formType?: 'contact' | 'consultancy' | 'careers';
  showSubject?: boolean;
}

export function ContactForm({ formType = 'contact', showSubject = true }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
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
        body: JSON.stringify({ formType, ...fields }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed.');
      }

      setFormState('success');
      setFields({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setErrorMessage(message);
      setFormState('error');
    }
  };

  const inputClass =
    'w-full h-[56px] px-6 bg-white border border-[#e4e9f2] rounded-[8px] text-[#0a0d53] font-inter text-[15px] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#06bae1] focus:ring-1 focus:ring-[#06bae1] transition-all disabled:opacity-60';

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-16 px-8">
        <div className="w-[72px] h-[72px] rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-[#0a0d53] font-roboto font-bold text-[24px]">Message Sent!</h3>
        <p className="text-[#5b6472] font-inter text-[15px] max-w-[400px]">
          Thank you for reaching out. A member of the Davethan team will be in touch with you shortly.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-4 text-[#06bae1] font-inter font-bold text-[14px] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          name="name"
          type="text"
          placeholder="Enter Name"
          required
          value={fields.name}
          onChange={handleChange}
          disabled={formState === 'loading'}
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          required
          value={fields.email}
          onChange={handleChange}
          disabled={formState === 'loading'}
          className={inputClass}
        />
        {showSubject && (
          <input
            name="subject"
            type="text"
            placeholder="Enter Subject"
            value={fields.subject}
            onChange={handleChange}
            disabled={formState === 'loading'}
            className={inputClass}
          />
        )}
        <input
          name="phone"
          type="tel"
          placeholder="Enter Phone"
          value={fields.phone}
          onChange={handleChange}
          disabled={formState === 'loading'}
          className={inputClass}
        />
      </div>

      <textarea
        name="message"
        placeholder="Enter Message"
        rows={6}
        required
        value={fields.message}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className="w-full p-6 bg-white border border-[#e4e9f2] rounded-[8px] text-[#0a0d53] font-inter text-[15px] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#06bae1] focus:ring-1 focus:ring-[#06bae1] transition-all resize-none disabled:opacity-60"
      />

      {formState === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 font-inter text-[14px] rounded-[8px] px-5 py-3">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={formState === 'loading'}
        className="inline-flex items-center justify-center gap-2 bg-[#06bae1] hover:bg-[#05a6c9] disabled:bg-[#9ca3af] text-white font-inter font-bold text-[14px] px-8 py-4 rounded-[4px] transition-colors"
      >
        {formState === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
