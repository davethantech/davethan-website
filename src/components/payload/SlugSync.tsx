'use client';

import { useEffect } from 'react';
import { useField } from '@payloadcms/ui';

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
 * SlugSync — Invisible component rendered in the Post Title field's afterInput slot.
 *
 * Watches the `title` field value and auto-fills the `slug` field in real time
 * as the editor types. Because this renders AFTER the title input (not replacing
 * any field), both the title and slug fields remain fully visible even if this
 * component were to fail.
 *
 * The editor can still manually edit the slug field after it is auto-filled.
 */
export const SlugSync = () => {
  const { value: title } = useField<string>({ path: 'title' });
  const { value: slug, setValue: setSlug } = useField<string>({ path: 'slug' });

  useEffect(() => {
    if (typeof title === 'string' && title.length > 0) {
      const generated = generateSlug(title);
      // Only update if different — prevents overwriting deliberate manual edits
      // that happen to match a previously auto-generated value.
      if (generated && generated !== slug) {
        setSlug(generated);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  // Renders nothing — purely a behaviour hook attached to the title field.
  return null;
};
