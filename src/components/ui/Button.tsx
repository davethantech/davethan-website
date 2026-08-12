import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-bold transition-colors disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-400 to-[#bff9ea] text-[#0a0d53] hover:from-cyan-300 hover:to-cyan-100 shadow-[0px_4px_2px_rgba(6,186,225,0.67)]',
    secondary: 'bg-[#070933] text-white hover:bg-[#0a0d53]',
    outline: 'border-2 border-[#070933] text-[#070933] hover:bg-[#070933] hover:text-white',
  };
  
  const sizes = {
    sm: 'h-8 px-4 text-xs',
    md: 'h-10 px-6 text-sm',
    lg: 'h-12 px-8 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
