import { memo } from 'react';
import { TreeDetailsForm } from '../molecules/TreeDetailsForm';
import { ServiceSelector } from '../molecules/ServiceSelector';
import { LocationForm } from '../molecules/LocationForm';
import { Button } from '../atoms/Button';
import { TreeDetails, ServiceOptions, LocationDetails } from '../../types';

interface EstimatorFormProps {
  treeDetails: TreeDetails;
  serviceOptions: ServiceOptions;
  locationDetails: LocationDetails;
  isCalculating: boolean;
  onUpdateTree: (updates: Partial<TreeDetails>) => void;
  onUpdateService: (updates: Partial<ServiceOptions>) => void;
  onUpdateLocation: (updates: Partial<LocationDetails>) => void;
  onCalculate: () => void;
  onReset: () => void;
}

export const EstimatorForm = memo(({
  treeDetails, serviceOptions, locationDetails, isCalculating,
  onUpdateTree, onUpdateService, onUpdateLocation, onCalculate, onReset,
}: EstimatorFormProps) => (
  <div className="space-y-4">
    <TreeDetailsForm treeDetails={treeDetails} onUpdate={onUpdateTree} />
    <ServiceSelector serviceOptions={serviceOptions} onUpdate={onUpdateService} />
    <LocationForm locationDetails={locationDetails} onUpdate={onUpdateLocation} />
    <div className="flex gap-3">
      <Button onClick={onCalculate} disabled={isCalculating} fullWidth>
        {isCalculating ? '⏳ Calculating...' : '🧮 Calculate Estimate'}
      </Button>
      <Button onClick={onReset} variant="outline">
        🔄 Reset
      </Button>
    </div>
  </div>
));
