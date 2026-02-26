import { memo, type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const VARIANTS = {
  primary:   'bg-green-600 hover:bg-green-700 text-white disabled:opacity-50',
  secondary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50',
  outline:   'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white',
  danger:    'bg-red-600 hover:bg-red-700 text-white disabled:opacity-50',
};

export const Button = memo(({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  type = 'button',
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${VARIANTS[variant]} ${fullWidth ? 'w-full' : ''}`}
  >
    {children}
  </button>
));
