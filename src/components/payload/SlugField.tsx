'use client';

import React, { useCallback, useEffect } from 'react';
import { useField, useFormFields } from '@payloadcms/ui';
import type { TextFieldClientProps } from 'payload';

/**
 * SlugField — Custom Payload v3 UI field component.
 *
 * Watches the `title` field and auto-generates a URL-safe slug as the editor
 * types. The slug can still be manually overridden at any time.
 */
export const SlugField: React.FC<TextFieldClientProps> = (props) => {
  const { field, path } = props;

  const { value: slug, setValue: setSlug } = useField<string>({ path: path ?? 'slug' });

  // Read the title field value from the form state
  const titleValue = useFormFields(([fields]) => {
    const titleField = fields['title'];
    return titleField?.value as string | undefined;
  });

  const generateSlug = useCallback((title: string): string => {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }, []);

  useEffect(() => {
    if (titleValue && typeof titleValue === 'string') {
      const generated = generateSlug(titleValue);
      if (generated && generated !== slug) {
        setSlug(generated);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleValue]);

  const labelText = typeof field.label === 'string' ? field.label : 'URL Slug';

  return (
    <div style={{ marginBottom: '1rem' }}>
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
        {labelText}
        {field.required && (
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
          width: '100%',
          padding: '8px 12px',
          border: '1px solid var(--theme-elevation-150, #e4e9f2)',
          borderRadius: '6px',
          fontSize: '14px',
          background: 'var(--theme-elevation-100, #fff)',
          color: 'var(--theme-text, #0a0d53)',
          boxSizing: 'border-box',
        }}
      />

      <p style={{ fontSize: '12px', color: '#5b6472', marginTop: '5px' }}>
        Auto-filled from the Post Title. You may edit it manually.
      </p>
    </div>
  );
};
