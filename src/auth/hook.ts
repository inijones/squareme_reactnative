import { useAuthStore } from "./store";

export function useIsAuthenticated() {
  return !!useAuthStore((s) => s.token);
}
