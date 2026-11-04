'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useField, useFormFields } from '@payloadcms/ui';

function generateSlug(title: string): string {
  if (!title) return '';
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * SlugButton Component
 * Mounted on the `slug` field's `afterInput` hook in Payload Admin.
 *
 * Provides:
 * 1. Automatic keystroke synchronization from the Post Title input.
 * 2. A prominent "⚡ Generate Slug from Title" button for manual/instant generation.
 * 3. Direct DOM dispatch fallback ensuring Payload's input field updates visibly.
 */
export const SlugButton: React.FC = () => {
  const { value: slugValue, setValue: setSlug } = useField<string>({ path: 'slug' });
  const titleValue = useFormFields(([fields]) => (fields['title']?.value as string) ?? '');
  const [statusText, setStatusText] = useState<string | null>(null);
  const [hasManuallyEdited, setHasManuallyEdited] = useState(false);

  const applySlug = useCallback(
    (rawTitle: string) => {
      const slug = generateSlug(rawTitle);
      if (!slug) return;

      // 1. Update Payload form state via hook
      setSlug(slug);

      // 2. Direct DOM dispatch to ensure the input reflects the value immediately
      const slugInput = document.querySelector<HTMLInputElement>(
        'input[name="slug"], input#field-slug, input[id*="slug"]'
      );
      if (slugInput && slugInput.value !== slug) {
        slugInput.value = slug;
        slugInput.dispatchEvent(new Event('input', { bubbles: true }));
        slugInput.dispatchEvent(new Event('change', { bubbles: true }));
      }
    },
    [setSlug],
  );

  // Real-time synchronization as user types title
  useEffect(() => {
    if (!hasManuallyEdited && titleValue && typeof titleValue === 'string') {
      const generated = generateSlug(titleValue);
      if (generated && generated !== slugValue) {
        applySlug(titleValue);
      }
    }
  }, [titleValue, hasManuallyEdited, slugValue, applySlug]);

  // Native DOM listener fallback on the title input
  useEffect(() => {
    const handleTitleInput = (e: Event) => {
      if (hasManuallyEdited) return;
      const target = e.target as HTMLInputElement;
      if (target && typeof target.value === 'string') {
        applySlug(target.value);
      }
    };

    const titleInput = document.querySelector<HTMLInputElement>(
      'input[name="title"], input#field-title, input[id*="title"]'
    );
    if (titleInput) {
      titleInput.addEventListener('input', handleTitleInput);
      return () => titleInput.removeEventListener('input', handleTitleInput);
    }
  }, [hasManuallyEdited, applySlug]);

  // Track if the user explicitly types directly inside the slug input
  useEffect(() => {
    const handleSlugInput = () => {
      setHasManuallyEdited(true);
    };

    const slugInput = document.querySelector<HTMLInputElement>(
      'input[name="slug"], input#field-slug, input[id*="slug"]'
    );
    if (slugInput) {
      slugInput.addEventListener('input', handleSlugInput);
      return () => slugInput.removeEventListener('input', handleSlugInput);
    }
  }, []);

  const handleGenerateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    let titleToUse = titleValue;
    if (!titleToUse) {
      const titleInput = document.querySelector<HTMLInputElement>(
        'input[name="title"], input#field-title, input[id*="title"]'
      );
      if (titleInput?.value) {
        titleToUse = titleInput.value;
      }
    }

    if (!titleToUse || !titleToUse.trim()) {
      setStatusText('Please enter a title first');
      setTimeout(() => setStatusText(null), 2500);
      return;
    }

    // Reset manual edit lock on explicit button click
    setHasManuallyEdited(false);
    applySlug(titleToUse);
    setStatusText('✓ Slug generated');
    setTimeout(() => setStatusText(null), 2000);
  };

  const isSuccess = statusText?.startsWith('✓');

  return (
    <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button
        type="button"
        onClick={handleGenerateClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          fontSize: '12px',
          fontWeight: 600,
          fontFamily: 'inherit',
          color: isSuccess ? '#047857' : '#0a0d53',
          backgroundColor: isSuccess ? '#d1fae5' : '#eef2f6',
          border: isSuccess ? '1px solid #10b981' : '1px solid #cbd5e1',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => {
          if (!isSuccess) e.currentTarget.style.backgroundColor = '#e2e8f0';
        }}
        onMouseLeave={(e) => {
          if (!isSuccess) e.currentTarget.style.backgroundColor = '#eef2f6';
        }}
      >
        <span>{isSuccess ? '✓' : '⚡'}</span>
        <span>{statusText || 'Generate Slug from Title'}</span>
      </button>

      <span style={{ fontSize: '11px', color: '#64748b' }}>
        Auto-generates as you type, or click to refresh.
      </span>
    </div>
  );
};

