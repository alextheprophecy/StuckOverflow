import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  const baseClasses = 'inline-block px-2 py-1 text-xs font-semibold rounded-full';
  const variantClasses = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className || ''}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
