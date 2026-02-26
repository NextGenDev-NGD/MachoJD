import { memo } from 'react';

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  tooltip?: string;
  onChange: (value: number) => void;
}

export const Slider = memo(({
  label, value, min, max, step = 1, unit = '', tooltip, onChange,
}: SliderProps) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <label className="text-sm font-medium text-gray-700">
        {label}{' '}
        {tooltip && (
          <span className="text-gray-400 cursor-help" title={tooltip}>ℹ️</span>
        )}
      </label>
      <span className="text-sm font-bold text-green-600">{value}{unit}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={e => onChange(Number(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
    />
    <div className="flex justify-between text-xs text-gray-400 mt-1">
      <span>{min}{unit}</span>
      <span>{max}{unit}</span>
    </div>
  </div>
));
