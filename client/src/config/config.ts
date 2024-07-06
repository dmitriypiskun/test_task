export interface AppConfig {
  apiUrl: string;
  requestCount: number;
  requestLimit: number;
}

export const config: AppConfig = {
  apiUrl: import.meta.env.NX_API_URL || 'http://localhost:3000',
  requestCount: Number(import.meta.env.NX_REQUEST_COUNT) || 1000,
  requestLimit: Number(import.meta.env.NX_REQUEST_LIMIT) || 1000,
};
