import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}) => {
  const baseClasses = 'px-4 py-2 rounded';
  const variantClasses = {
    default: 'bg-blue-500 text-white',
    ghost: 'bg-transparent hover:bg-gray-100',
    outline: 'border border-gray-300',
  };
  const sizeClasses = {
    default: 'text-base',
    sm: 'text-sm px-2 py-1',
    lg: 'text-lg px-6 py-3',
    icon: 'p-2',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};