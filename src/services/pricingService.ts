import { TreeDetails, ServiceOptions, LocationDetails, EstimateResult } from '../types';
import {
  SERVICE_TYPES,
  ACCESS_DIFFICULTY,
  LOCATION_TYPES,
  ADDITIONAL_SERVICES,
  CREW_REQUIREMENTS,
  TIME_ESTIMATES,
} from '../constants/serviceConfig';
import { SIZE_MULTIPLIERS, LABOR_RATE, EQUIPMENT_RATE, DISPOSAL_RATE } from '../constants/pricingConfig';

const HOURS_BY_SIZE_AND_SERVICE: Record<string, Record<string, number>> = {
  small:       { removal: 3,  trimming: 2,  stump_grinding: 1, emergency: 3  },
  medium:      { removal: 6,  trimming: 4,  stump_grinding: 2, emergency: 6  },
  large:       { removal: 12, trimming: 8,  stump_grinding: 3, emergency: 12 },
  extra_large: { removal: 20, trimming: 14, stump_grinding: 4, emergency: 20 },
};

const EQUIPMENT_HOURS: Record<string, number> = {
  small: 2, medium: 4, large: 8, extra_large: 14,
};

export const calculateEstimate = (
  treeDetails: TreeDetails,
  serviceOptions: ServiceOptions,
  locationDetails: LocationDetails,
): EstimateResult => {
  const service = SERVICE_TYPES[serviceOptions.serviceType];
  const sizeMultiplier = SIZE_MULTIPLIERS[treeDetails.size];
  const difficultyMultiplier = ACCESS_DIFFICULTY[locationDetails.accessDifficulty].multiplier;
  const locationMultiplier = LOCATION_TYPES[locationDetails.locationType].multiplier;

  const basePrice = service.basePrice * sizeMultiplier;
  const hours = HOURS_BY_SIZE_AND_SERVICE[treeDetails.size]?.[serviceOptions.serviceType] ?? 4;
  const laborCost = hours * LABOR_RATE;
  const equipmentCost = (EQUIPMENT_HOURS[treeDetails.size] ?? 4) * EQUIPMENT_RATE;
  const cubicYards = (treeDetails.height / 10) * (treeDetails.diameter / 12);
  const disposalCost = Math.round(cubicYards) * DISPOSAL_RATE;

  let additionalServices = 0;
  const notes: string[] = [];

  if (serviceOptions.includeStumpRemoval) {
    additionalServices += ADDITIONAL_SERVICES.stumpRemoval.price;
    notes.push('Stump removal included');
  }
  if (serviceOptions.includeDebrisRemoval) {
    additionalServices += ADDITIONAL_SERVICES.debrisRemoval.price;
    notes.push('Debris cleanup included');
  }

  let total =
    (basePrice + laborCost + equipmentCost + disposalCost + additionalServices) *
    difficultyMultiplier *
    locationMultiplier *
    locationDetails.quantity;

  if (serviceOptions.emergencyService) {
    total *= ADDITIONAL_SERVICES.emergencyService.multiplier;
    notes.push('Emergency service premium applied (×1.5)');
  }
  if (locationDetails.locationType === 'near_power_lines') {
    notes.push('Utility company notification may be required');
  }

  return {
    breakdown: {
      basePrice: Math.round(basePrice),
      sizeMultiplier,
      difficultyMultiplier,
      locationMultiplier,
      additionalServices: Math.round(additionalServices),
      total: Math.round(total),
      laborCost: Math.round(laborCost),
      equipmentCost: Math.round(equipmentCost),
      disposalCost: Math.round(disposalCost),
    },
    timeEstimate: TIME_ESTIMATES[treeDetails.size],
    crewSize: CREW_REQUIREMENTS[treeDetails.size],
    notes,
  };
};
