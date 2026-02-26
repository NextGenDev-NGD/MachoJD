import { memo } from 'react';
import { PriceBreakdown } from '../../types';

interface PriceBreakdownCardProps {
  breakdown: PriceBreakdown;
}

export const PriceBreakdownCard = memo(({ breakdown }: PriceBreakdownCardProps) => {
  const rows = [
    { label: 'Base Price',         value: breakdown.basePrice },
    { label: 'Labor Cost',         value: breakdown.laborCost },
    { label: 'Equipment Cost',     value: breakdown.equipmentCost },
    { label: 'Disposal Cost',      value: breakdown.disposalCost },
    { label: 'Additional Services', value: breakdown.additionalServices },
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">💰 Price Breakdown</h3>
      <div className="space-y-2">
        {rows.map(row => (
          <div key={row.label} className="flex justify-between text-sm">
            <span className="text-gray-600">{row.label}</span>
            <span className="font-medium">${row.value.toLocaleString()}</span>
          </div>
        ))}
        <div className="border-t pt-2 space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Difficulty Multiplier</span>
            <span>×{breakdown.difficultyMultiplier}</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Location Multiplier</span>
            <span>×{breakdown.locationMultiplier}</span>
          </div>
        </div>
        <div className="flex justify-between text-lg font-bold text-green-600 border-t pt-3">
          <span>Total Estimate</span>
          <span>${breakdown.total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
});
