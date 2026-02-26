import { useState, useCallback } from 'react';
import { EstimatorState, TreeDetails, ServiceOptions, LocationDetails } from '../types';
import { calculateEstimate } from '../services/pricingService';
import { getTreeSize } from '../constants/pricingConfig';

const initialState: EstimatorState = {
  treeDetails: { height: 30, diameter: 12, size: 'medium' },
  serviceOptions: {
    serviceType: 'removal',
    includeStumpRemoval: false,
    includeDebrisRemoval: false,
    emergencyService: false,
  },
  locationDetails: {
    accessDifficulty: 'easy',
    locationType: 'open',
    quantity: 1,
  },
  estimate: null,
  isCalculating: false,
};

export const useTreeEstimator = () => {
  const [state, setState] = useState<EstimatorState>(initialState);

  const updateTreeDetails = useCallback((updates: Partial<TreeDetails>) => {
    setState(prev => {
      const newDetails = { ...prev.treeDetails, ...updates };
      if (updates.height !== undefined) {
        newDetails.size = getTreeSize(updates.height);
      }
      return { ...prev, treeDetails: newDetails, estimate: null };
    });
  }, []);

  const updateServiceOptions = useCallback((updates: Partial<ServiceOptions>) => {
    setState(prev => ({
      ...prev,
      serviceOptions: { ...prev.serviceOptions, ...updates },
      estimate: null,
    }));
  }, []);

  const updateLocationDetails = useCallback((updates: Partial<LocationDetails>) => {
    setState(prev => ({
      ...prev,
      locationDetails: { ...prev.locationDetails, ...updates },
      estimate: null,
    }));
  }, []);

  const calculatePrice = useCallback(() => {
    setState(prev => ({ ...prev, isCalculating: true }));
    setTimeout(() => {
      setState(prev => {
        const estimate = calculateEstimate(
          prev.treeDetails,
          prev.serviceOptions,
          prev.locationDetails,
        );
        return { ...prev, estimate, isCalculating: false };
      });
    }, 400);
  }, []);

  const reset = useCallback(() => setState(initialState), []);

  return {
    ...state,
    updateTreeDetails,
    updateServiceOptions,
    updateLocationDetails,
    calculatePrice,
    reset,
  };
};
