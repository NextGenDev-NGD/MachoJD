import { memo } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  value: string;
  options: SelectOption[];
  tooltip?: string;
  onChange: (value: string) => void;
}

export const Select = memo(({ label, value, options, tooltip, onChange }: SelectProps) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}{' '}
      {tooltip && (
        <span className="text-gray-400 cursor-help" title={tooltip}>ℹ️</span>
      )}
    </label>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
));
