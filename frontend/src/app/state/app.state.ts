export interface AppState {
  isLoading: boolean;
  lastError: string | null;
}

export const initialAppState: AppState = {
  isLoading: false,
  lastError: null
};
