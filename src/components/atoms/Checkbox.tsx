import { memo } from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  description?: string;
  price?: number;
  onChange: (checked: boolean) => void;
}

export const Checkbox = memo(({ label, checked, description, price, onChange }: CheckboxProps) => (
  <label className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
    <input
      type="checkbox"
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      className="mt-0.5 w-4 h-4 accent-green-600"
    />
    <div className="flex-1">
      <div className="flex justify-between">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {price !== undefined && (
          <span className="text-sm text-green-600 font-semibold">+${price}</span>
        )}
      </div>
      {description && (
        <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      )}
    </div>
  </label>
));
