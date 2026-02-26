import { memo } from 'react';
import { Select } from '../atoms/Select';
import { Slider } from '../atoms/Slider';
import { LocationDetails } from '../../types';
import { ACCESS_DIFFICULTY, LOCATION_TYPES } from '../../constants/serviceConfig';

interface LocationFormProps {
  locationDetails: LocationDetails;
  onUpdate: (updates: Partial<LocationDetails>) => void;
}

const difficultyOpts = Object.entries(ACCESS_DIFFICULTY).map(([value, cfg]) => ({
  value,
  label: cfg.label,
}));

const locationOpts = Object.entries(LOCATION_TYPES).map(([value, cfg]) => ({
  value,
  label: cfg.label,
}));

export const LocationForm = memo(({ locationDetails, onUpdate }: LocationFormProps) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">📍 Location & Access</h3>
    <Select
      label="Access Difficulty"
      value={locationDetails.accessDifficulty}
      options={difficultyOpts}
      tooltip="How easily can equipment reach the tree?"
      onChange={val => onUpdate({ accessDifficulty: val as LocationDetails['accessDifficulty'] })}
    />
    <Select
      label="Location Type"
      value={locationDetails.locationType}
      options={locationOpts}
      tooltip="Where is the tree located relative to structures?"
      onChange={val => onUpdate({ locationType: val as LocationDetails['locationType'] })}
    />
    <Slider
      label="Number of Trees"
      value={locationDetails.quantity}
      min={1}
      max={10}
      unit=" tree(s)"
      onChange={quantity => onUpdate({ quantity })}
    />
  </div>
));
