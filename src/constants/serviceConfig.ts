export const SERVICE_TYPES = {
  removal: {
    label: 'Tree Removal',
    description: 'Complete removal of tree',
    basePrice: 300,
    icon: '🌳',
  },
  trimming: {
    label: 'Tree Trimming',
    description: 'Pruning and shaping',
    basePrice: 150,
    icon: '✂️',
  },
  stump_grinding: {
    label: 'Stump Grinding',
    description: 'Remove existing stump',
    basePrice: 100,
    icon: '⚙️',
  },
  emergency: {
    label: 'Emergency Service',
    description: '24/7 emergency response',
    basePrice: 500,
    icon: '🚨',
  },
};

export const TREE_SIZE_RANGES = {
  small: { label: 'Small (< 25 ft)', min: 0, max: 25 },
  medium: { label: 'Medium (25–50 ft)', min: 25, max: 50 },
  large: { label: 'Large (50–75 ft)', min: 50, max: 75 },
  extra_large: { label: 'Extra Large (> 75 ft)', min: 75, max: 120 },
};

export const ACCESS_DIFFICULTY = {
  easy: { label: 'Easy Access', multiplier: 1.0 },
  moderate: { label: 'Moderate', multiplier: 1.3 },
  difficult: { label: 'Difficult', multiplier: 1.6 },
};

export const LOCATION_TYPES = {
  open: { label: 'Open Area', multiplier: 1.0 },
  near_structure: { label: 'Near Structure', multiplier: 1.25 },
  near_power_lines: { label: 'Near Power Lines', multiplier: 1.5 },
  enclosed: { label: 'Enclosed / Backyard', multiplier: 1.4 },
};

export const ADDITIONAL_SERVICES = {
  stumpRemoval: { label: 'Stump Removal', price: 150 },
  debrisRemoval: { label: 'Debris Removal', price: 75 },
  emergencyService: { label: 'Emergency Premium', multiplier: 1.5 },
};

export const CREW_REQUIREMENTS: Record<string, number> = {
  small: 2,
  medium: 3,
  large: 4,
  extra_large: 5,
};

export const TIME_ESTIMATES: Record<string, string> = {
  small: '2–4 hours',
  medium: '4–8 hours',
  large: '1–2 days',
  extra_large: '2–3 days',
};
