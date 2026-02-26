import { memo } from 'react';
import { Select } from '../atoms/Select';
import { Checkbox } from '../atoms/Checkbox';
import { ServiceOptions } from '../../types';
import { SERVICE_TYPES, ADDITIONAL_SERVICES } from '../../constants/serviceConfig';

interface ServiceSelectorProps {
  serviceOptions: ServiceOptions;
  onUpdate: (updates: Partial<ServiceOptions>) => void;
}

const serviceOpts = Object.entries(SERVICE_TYPES).map(([value, cfg]) => ({
  value,
  label: `${cfg.icon} ${cfg.label}`,
}));

export const ServiceSelector = memo(({ serviceOptions, onUpdate }: ServiceSelectorProps) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">🔧 Service Options</h3>
    <Select
      label="Service Type"
      value={serviceOptions.serviceType}
      options={serviceOpts}
      onChange={val => onUpdate({ serviceType: val as ServiceOptions['serviceType'] })}
    />
    <div className="space-y-2 mt-3">
      <Checkbox
        label="Include Stump Removal"
        checked={serviceOptions.includeStumpRemoval}
        description="Grind and remove the stump after cutting"
        price={ADDITIONAL_SERVICES.stumpRemoval.price}
        onChange={checked => onUpdate({ includeStumpRemoval: checked })}
      />
      <Checkbox
        label="Include Debris Removal"
        checked={serviceOptions.includeDebrisRemoval}
        description="Clean up and haul away all debris"
        price={ADDITIONAL_SERVICES.debrisRemoval.price}
        onChange={checked => onUpdate({ includeDebrisRemoval: checked })}
      />
      <Checkbox
        label="Emergency Service (24/7)"
        checked={serviceOptions.emergencyService}
        description="Priority response — 50% premium applies"
        onChange={checked => onUpdate({ emergencyService: checked })}
      />
    </div>
  </div>
));
