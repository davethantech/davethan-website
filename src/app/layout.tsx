import React from 'react';

/**
 * Root layout — intentionally bare.
 * Route groups own their own <html>/<body>:
 *   (app)/layout.tsx  → public website
 *   (payload)/layout.tsx → Payload admin (via RootLayout)
 * This avoids nested <html> elements that break React hydration.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

