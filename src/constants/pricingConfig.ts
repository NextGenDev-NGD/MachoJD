import { TreeSize } from '../types';

export const SIZE_MULTIPLIERS: Record<TreeSize, number> = {
  small: 1.0,
  medium: 1.8,
  large: 2.8,
  extra_large: 4.2,
};

export const LABOR_RATE = 85;      // $ per hour
export const EQUIPMENT_RATE = 120; // $ per hour
export const DISPOSAL_RATE = 50;   // $ per cubic yard

export const getTreeSize = (height: number): TreeSize => {
  if (height < 25) return 'small';
  if (height < 50) return 'medium';
  if (height < 75) return 'large';
  return 'extra_large';
};
