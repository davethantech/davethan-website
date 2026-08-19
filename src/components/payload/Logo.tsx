'use client';
import React from 'react';

/**
 * Logo — shown on the login screen and at the top of the admin sidebar.
 * Matches the Davethan homepage design system exactly.
 */
export const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/davethan_logo.webp"
      alt="Davethan Technologies CMS"
      style={{
        height: '48px',
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
      }}
    />
  </div>
);

/**
 * Icon — shown in the top left of the dashboard.
 */
export const Icon = () => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src="/davethan_logo.webp"
    alt="Davethan Icon"
    style={{
      height: '48px',
      width: 'auto',
      objectFit: 'contain',
      display: 'block',
    }}
  />
);

