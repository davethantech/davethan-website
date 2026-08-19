import React from 'react';

export const Logo = () => (
  <div className="payload-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <img 
      src="/davethan_logo.webp" 
      alt="Davethan Logo" 
      style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
    />
    <span style={{ color: '#0a0d53', fontSize: '20px', fontWeight: 'bold', fontFamily: 'inherit' }}>
      Davethan CMS
    </span>
  </div>
);

export const Icon = () => (
  <img 
    src="/davethan_logo.webp" 
    alt="Davethan Icon" 
    style={{ height: '32px', width: '32px', objectFit: 'cover', borderRadius: '4px' }} 
  />
);
