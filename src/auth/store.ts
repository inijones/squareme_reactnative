import { create } from "zustand";
import { isSuccess } from "../../utils/result";
import { loginRepo } from "./repository";
import { AuthToken } from "./types";

interface AuthState {
  token: AuthToken | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    const result = await loginRepo(email, password);

    if (isSuccess(result)) {
      set({ token: result.value, loading: false });
    } else {
      set({ error: result.error.message, loading: false });
    }
  },

  logout: () => set({ token: null }),
}));
