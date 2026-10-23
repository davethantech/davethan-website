'use client';

import React, { useEffect } from 'react';
import { useField, useAllFormFields } from '@payloadcms/ui';

/**
 * SlugField — Custom Payload v3 UI field.
 * Watches the `title` field and auto-generates a URL-safe slug as the editor
 * types. The slug can still be manually overridden at any time.
 */
export const SlugField: React.FC<{ path: string; label?: string; required?: boolean }> = ({
  path,
  label = 'URL Slug',
  required = false,
}) => {
  const { value: slug, setValue: setSlug } = useField<string>({ path });

  // useAllFormFields returns [fields, dispatch] — read all current field values
  const [fields] = useAllFormFields();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const titleValue: string = (fields as any)?.title?.value ?? '';

  function generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  useEffect(() => {
    if (titleValue) {
      const generated = generateSlug(titleValue);
      if (generated && generated !== slug) {
        setSlug(generated);
      }
    }
  // Only run when the title changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleValue]);

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label
        htmlFor={`field-${path}`}
        style={{
          display: 'block',
          fontSize: '13px',
          fontWeight: 600,
          marginBottom: '6px',
          color: 'var(--theme-text, #0a0d53)',
        }}
      >
        {label}
        {required && (
          <span style={{ color: 'var(--theme-error-500, #e10606)', marginLeft: '4px' }}>*</span>
        )}
      </label>

      <input
        id={`field-${path}`}
        type="text"
        value={slug ?? ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSlug(e.target.value)}
        placeholder="auto-generated-from-title"
        style={{
          display: 'block',
          width: '100%',
          padding: '8px 12px',
          border: '1px solid var(--theme-elevation-150, #e4e9f2)',
          borderRadius: '6px',
          fontSize: '14px',
          background: 'var(--theme-elevation-100, #fff)',
          color: 'var(--theme-text, #0a0d53)',
          boxSizing: 'border-box',
          outline: 'none',
        }}
        onFocus={(e) => { e.target.style.borderColor = '#06bae1'; }}
        onBlur={(e) => { e.target.style.borderColor = 'var(--theme-elevation-150, #e4e9f2)'; }}
      />

      <p style={{ fontSize: '11px', color: '#5b6472', marginTop: '5px', margin: '5px 0 0 0' }}>
        Auto-filled from the Post Title. You may edit it manually.
      </p>
    </div>
  );
};
