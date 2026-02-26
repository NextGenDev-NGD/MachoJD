export type ServiceType = 'removal' | 'trimming' | 'stump_grinding' | 'emergency';
export type TreeSize = 'small' | 'medium' | 'large' | 'extra_large';
export type AccessDifficulty = 'easy' | 'moderate' | 'difficult';
export type LocationType = 'open' | 'near_structure' | 'near_power_lines' | 'enclosed';

export interface TreeDetails {
  height: number;
  diameter: number;
  size: TreeSize;
}

export interface ServiceOptions {
  serviceType: ServiceType;
  includeStumpRemoval: boolean;
  includeDebrisRemoval: boolean;
  emergencyService: boolean;
}

export interface LocationDetails {
  accessDifficulty: AccessDifficulty;
  locationType: LocationType;
  quantity: number;
}

export interface PriceBreakdown {
  basePrice: number;
  sizeMultiplier: number;
  difficultyMultiplier: number;
  locationMultiplier: number;
  additionalServices: number;
  total: number;
  laborCost: number;
  equipmentCost: number;
  disposalCost: number;
}

export interface EstimateResult {
  breakdown: PriceBreakdown;
  timeEstimate: string;
  crewSize: number;
  notes: string[];
}

export interface EstimatorState {
  treeDetails: TreeDetails;
  serviceOptions: ServiceOptions;
  locationDetails: LocationDetails;
  estimate: EstimateResult | null;
  isCalculating: boolean;
}

export interface TooltipState {
  visible: boolean;
  content: string;
  x: number;
  y: number;
}
