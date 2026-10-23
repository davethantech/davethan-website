'use client';

import React, { useEffect } from 'react';
import { useField, useFormFields } from '@payloadcms/ui';

function generateSlug(title: string): string {
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
 * SlugField — Custom Payload v3 field component.
 *
 * Uses useFormFields to watch the `title` field and auto-generates
 * a URL-safe slug in real time as the editor types the post title.
 * The slug can still be manually overridden at any time.
 *
 * Payload passes `path` (and many other props) to custom Field components.
 * We accept `path` and ignore the rest via the index signature.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SlugField: React.FC<{ path: string; [key: string]: any }> = ({ path }) => {
  const { value: slug, setValue: setSlug } = useField<string>({ path });

  // useFormFields re-renders this component whenever ANY form field changes.
  // The selector picks only the title value to minimise unnecessary renders.
  const titleValue = useFormFields(
    ([fields]) => (fields['title']?.value as string) ?? '',
  );

  // Auto-generate the slug whenever the title changes.
  // The editor can still override the slug manually after auto-fill.
  useEffect(() => {
    if (titleValue) {
      const generated = generateSlug(titleValue);
      if (generated && generated !== slug) {
        setSlug(generated);
      }
    }
  // Intentionally omit slug and setSlug from deps so manual edits
  // to the slug field are not immediately overwritten on re-render.
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
        URL Slug{' '}
        <span style={{ color: 'var(--theme-error-500, #e10606)' }}>*</span>
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
          transition: 'border-color 0.15s ease',
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = '#06bae1'; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--theme-elevation-150, #e4e9f2)'; }}
      />

      <p style={{ fontSize: '11px', color: '#5b6472', margin: '5px 0 0 0' }}>
        Auto-filled from the Post Title as you type. You may edit it manually.
      </p>
    </div>
  );
};
