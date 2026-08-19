/**
 * Payload Local API Singleton
 * 
 * Provides a single shared instance of the Payload client for use in
 * Next.js server components and server actions. Prevents multiple database
 * connections being opened in development hot-reload cycles.
 * 
 * Usage (server component only):
 *   import { getPayloadClient } from '@/lib/payload';
 *   const payload = await getPayloadClient();
 *   const posts = await payload.find({ collection: 'posts', ... });
 */

import { getPayload } from 'payload';
import config from '@payload-config';

// Cache the promise so we only call getPayload() once per process lifecycle
let payloadPromise: ReturnType<typeof getPayload> | null = null;

export async function getPayloadClient() {
  if (!payloadPromise) {
    payloadPromise = getPayload({ config });
  }
  return payloadPromise;
}
