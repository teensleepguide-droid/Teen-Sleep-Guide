import React from 'react';

export const Button = React.forwardRef(({ className = '', children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={props.type || 'button'}
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
