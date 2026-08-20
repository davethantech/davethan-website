import React from 'react';
import { Payload } from 'payload';

export const CustomDashboard: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #070933 0%, #0a0d53 100%)',
      borderRadius: '16px',
      padding: '32px 24px',
      color: '#ffffff',
      marginBottom: '32px',
      boxShadow: '0 10px 30px rgba(6, 186, 225, 0.15)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(6, 186, 225, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div 
          role="heading" 
          aria-level={1}
          style={{ 
            fontSize: '32px', 
            fontWeight: 700, 
            marginBottom: '12px',
            color: '#ffffff',
            fontFamily: "'Roboto', sans-serif",
            lineHeight: 1.2
          }}
        >
          Welcome to Davethan CMS
        </div>
        <p style={{ 
          fontSize: '16px', 
          color: '#bff9ea', 
          maxWidth: '600px', 
          lineHeight: 1.6,
          marginBottom: '32px',
          fontFamily: "'Inter', sans-serif"
        }}>
          Manage your enterprise content, careers, blog posts, and form submissions from this centralized administrative dashboard. Use the sidebar on the left to navigate between different data collections.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/admin/collections/posts/create" style={{
            background: 'linear-gradient(270deg, #bff9ea 0%, #06bae1 100%)',
            color: '#070933',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontFamily: "'Roboto', sans-serif",
            boxShadow: '0 4px 12px rgba(6, 186, 225, 0.3)',
            transition: 'transform 0.2s ease',
            display: 'inline-block'
          }}>
            Write a New Post
          </a>
          <a href="/admin/collections/jobs/create" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontFamily: "'Roboto', sans-serif",
            transition: 'background 0.2s ease',
            display: 'inline-block'
          }}>
            Post a Job Opening
          </a>
        </div>
      </div>
    </div>
  );
};
