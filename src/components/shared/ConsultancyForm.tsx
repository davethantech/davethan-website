'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function ConsultancyForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage('');

    try {
      // We combine company and service into the 'subject' field for Payload/Email since those are custom to this form
      const subject = `Company: ${fields.company || 'N/A'} | Service: ${fields.service || 'N/A'}`;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          formType: 'consultancy', 
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          subject: subject,
          message: fields.message
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed.');
      }

      setFormState('success');
      setFields({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setErrorMessage(message);
      setFormState('error');
    }
  };

  const inputClass =
    'w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#06bae1] transition-colors font-inter text-[14px] disabled:opacity-60';

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 py-8">
        <div className="w-[56px] h-[56px] rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-white font-roboto font-bold text-[24px]">Message Sent!</h3>
        <p className="text-[rgba(255,255,255,0.7)] font-inter text-[15px] max-w-[400px]">
          Thank you for reaching out. A member of the Davethan team will be in touch with you shortly.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="mt-2 text-[#06bae1] font-inter font-bold text-[14px] hover:underline"
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
        placeholder="Full name"
        required
        value={fields.name}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className={inputClass}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        value={fields.email}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className={inputClass}
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone number"
        value={fields.phone}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className={inputClass}
      />
      <input
        name="company"
        type="text"
        placeholder="Company"
        value={fields.company}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className={inputClass}
      />
      <select 
        name="service"
        value={fields.service}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className="w-full bg-[#131640] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white focus:outline-none focus:border-[#06bae1] transition-colors font-inter text-[14px] appearance-none disabled:opacity-60"
      >
        <option value="" disabled>&mdash; Choose a service &mdash;</option>
        <option value="IT Consultancy" className="text-white">IT Consultancy</option>
        <option value="Managed IT" className="text-white">Managed IT</option>
        <option value="Cloud Services" className="text-white">Cloud Services</option>
      </select>
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        required
        value={fields.message}
        onChange={handleChange}
        disabled={formState === 'loading'}
        className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.4)] focus:outline-none focus:border-[#06bae1] transition-colors font-inter text-[14px] resize-none disabled:opacity-60"
      />

      {formState === 'error' && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 font-inter text-[14px] rounded-[8px] px-5 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button 
        type="submit" 
        disabled={formState === 'loading'}
        className="flex items-center justify-center gap-2 bg-[#06bae1] hover:bg-[#05a6c9] disabled:bg-[#06bae1]/60 text-[#0a0d53] font-bold font-inter text-[14px] px-8 py-3 rounded-[8px] transition-opacity mt-4"
      >
        {formState === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[#0a0d53]" />
            Sending...
          </>
        ) : (
          <>
            Send us a Message &rarr;
          </>
        )}
      </button>
    </form>
  );
}
