'use client';

import { useEffect } from 'react';
import { useField, useFormFields, useForm } from '@payloadcms/ui';

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
 * SlugSync — Invisible component in the Post Title field's afterInput slot.
 *
 * useFormFields (Zustand selector) re-renders this component on every title
 * keystroke. useField for slug gives us the setter to write the new value.
 * Renders null — has zero visual footprint.
 */
export const SlugSync = () => {
  // useFormFields: Zustand selector — re-renders on every form field change
  const title = useFormFields(
    ([fields]) => (fields['title']?.value as string) ?? '',
  );

  // useField for slug: gives us the current value + the setter
  const { value: slug, setValue: setSlug } = useField<string>({ path: 'slug' });

  useEffect(() => {
    if (typeof title === 'string' && title.length > 0) {
      const generated = generateSlug(title);
      if (generated && generated !== slug) {
        setSlug(generated);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  return null;
};
