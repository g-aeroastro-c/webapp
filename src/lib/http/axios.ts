import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { supabase } from '@/lib/supabaseClient';

// Axios instance with automatic auth bearer injection (if session exists)
export const api = axios.create({
  baseURL: typeof window !== 'undefined' ? window.location.origin : undefined,
  withCredentials: true,
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.access_token) {
      // Only attach if not already provided
      if (!config.headers.get('Authorization')) {
        config.headers.set('Authorization', `Bearer ${session.access_token}`);
      }
    }
  } catch {/* ignore */}
  return config;
});

api.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: any) => {
    // Central place to detect 401 and optionally trigger refresh/redirect
    if (err?.response?.status === 401) {
      // Optionally handle silent sign-out or token refresh here
      // console.warn('Unauthorized response from API', err.response?.data);
    }
    return Promise.reject(err);
  }
);
