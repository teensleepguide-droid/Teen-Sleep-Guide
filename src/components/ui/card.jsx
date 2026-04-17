import React from 'react';

export const Card = ({ className = '', children }) => {
  return (
    <div className={`rounded-3xl border bg-slate-950/50 shadow-xl ${className}`.trim()}>
      {children}
    </div>
  );
};

export const CardHeader = ({ className = '', children }) => {
  return <div className={`px-8 pt-8 ${className}`.trim()}>{children}</div>;
};

export const CardTitle = ({ className = '', children }) => {
  return <h3 className={`text-2xl font-semibold ${className}`.trim()}>{children}</h3>;
};

export const CardContent = ({ className = '', children }) => {
  return <div className={`px-8 py-6 ${className}`.trim()}>{children}</div>;
};
