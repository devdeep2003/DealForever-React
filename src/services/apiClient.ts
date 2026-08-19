import axios, { AxiosError } from 'axios';

// Base URL detection: falls back to the production API domain if env var is empty
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional Bearer token helper (gets token from localStorage)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Standardized error response interface
export interface ApiError {
  errorCode: string;
  message: string;
  details?: any;
}

// Global Response interceptor for unified error formatting
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    let apiError: ApiError = {
      errorCode: 'UNKNOWN_ERROR',
      message: 'An unexpected error occurred. Please try again.',
    };

    if (error.response) {
      // Server returned a status code outside the 2xx range
      const responseData = error.response.data as any;
      apiError = {
        errorCode: responseData?.errorCode || `HTTP_${error.response.status}`,
        message: responseData?.message || error.message || 'Server error occurred.',
        details: responseData?.details || responseData || null,
      };
    } else if (error.request) {
      // Request was made but no response was received
      apiError = {
        errorCode: 'NETWORK_ERROR',
        message: 'Network error. Please check your internet connection and try again.',
      };
    } else {
      // Something happened in setting up the request
      apiError = {
        errorCode: 'REQUEST_SETUP_ERROR',
        message: error.message || 'Failed to initialize request.',
      };
    }

    return Promise.reject(apiError);
  }
);

/**
 * Extracts data safely from dynamic response structures (envelope/list)
 */
export const extractResponseData = <T>(response: any): T => {
  const data = response?.data;
  if (data && data.responseCode === 200 && data.response !== undefined) {
    return data.response as T;
  }
  return (data !== undefined ? data : response) as T;
};
