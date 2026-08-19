'use client';
import React from 'react';

/**
 * Logo — shown on the login screen and at the top of the admin sidebar.
 * Matches the Davethan homepage design system exactly.
 */
export const Logo = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '4px 0',
    }}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/davethan_logo.webp"
      alt="Davethan Technologies Logo"
      style={{
        height: '36px',
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        borderRadius: '6px',
      }}
    />
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
      <span
        style={{
          color: '#0a0d53',
          fontSize: '16px',
          fontWeight: '700',
          fontFamily: "'Roboto', 'Inter', sans-serif",
          letterSpacing: '-0.3px',
        }}
      >
        Davethan
      </span>
      <span
        style={{
          color: '#06bae1',
          fontSize: '10px',
          fontWeight: '600',
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '0.8px',
          textTransform: 'uppercase' as const,
        }}
      >
        CMS
      </span>
    </div>
  </div>
);

/**
 * Icon — shown collapsed in the sidebar nav.
 */
export const Icon = () => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src="/davethan_logo.webp"
    alt="Davethan Icon"
    style={{
      height: '28px',
      width: '28px',
      objectFit: 'cover',
      borderRadius: '6px',
      display: 'block',
    }}
  />
);
