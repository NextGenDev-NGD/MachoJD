import { EstimateResult, TreeDetails, ServiceOptions, LocationDetails } from '../types';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3001/api';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export const submitEstimate = async (
  treeDetails: TreeDetails,
  serviceOptions: ServiceOptions,
  locationDetails: LocationDetails,
  estimate: EstimateResult,
): Promise<ApiResponse<{ id: string; message: string }>> => {
  try {
    const response = await fetch(`${API_BASE}/estimates`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ treeDetails, serviceOptions, locationDetails, estimate }),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json() as ApiResponse<{ id: string; message: string }>;
  } catch {
    return { success: false, error: 'Unable to submit estimate. No backend server is running.' };
  }
};

export const requestCallback = async (
  name: string,
  phone: string,
  estimateTotal: number,
): Promise<ApiResponse<{ message: string }>> => {
  try {
    const response = await fetch(`${API_BASE}/callback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, estimateTotal }),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json() as ApiResponse<{ message: string }>;
  } catch {
    return { success: false, error: 'Unable to request callback. No backend server is running.' };
  }
};
