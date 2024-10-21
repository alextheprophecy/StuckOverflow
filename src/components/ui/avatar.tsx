import React from 'react';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ children, className, ...props }) => {
  const baseClasses = 'relative flex shrink-0 overflow-hidden rounded-full';
  const classes = `${baseClasses} ${className || ''}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const AvatarImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => {
  const classes = `aspect-square h-full w-full ${className || ''}`;
  return <img className={classes} {...props} />;
};

export const AvatarFallback: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  const classes = `flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 ${className || ''}`;
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
