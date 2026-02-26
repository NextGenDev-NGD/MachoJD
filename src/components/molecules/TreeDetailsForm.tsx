import { memo } from 'react';
import { Slider } from '../atoms/Slider';
import { TreeDetails } from '../../types';
import { TREE_SIZE_RANGES } from '../../constants/serviceConfig';

interface TreeDetailsFormProps {
  treeDetails: TreeDetails;
  onUpdate: (updates: Partial<TreeDetails>) => void;
}

export const TreeDetailsForm = memo(({ treeDetails, onUpdate }: TreeDetailsFormProps) => {
  const sizeInfo = TREE_SIZE_RANGES[treeDetails.size];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">🌳 Tree Details</h3>
      <Slider
        label="Tree Height"
        value={treeDetails.height}
        min={5}
        max={120}
        unit=" ft"
        tooltip="Approximate height from ground to top"
        onChange={height => onUpdate({ height })}
      />
      <Slider
        label="Trunk Diameter"
        value={treeDetails.diameter}
        min={1}
        max={60}
        unit=" in"
        tooltip="Diameter measured at chest height"
        onChange={diameter => onUpdate({ diameter })}
      />
      <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
        <p className="text-sm text-green-700 font-medium">
          Size Category: <span className="font-bold">{sizeInfo.label}</span>
        </p>
      </div>
    </div>
  );
});
