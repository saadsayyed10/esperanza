import { create } from "zustand";

interface Authentication {
  token: null | string;
  user: null | any;

  setAuth: (token: string, user: any) => Promise<void>;
  hydrate: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuth = create<Authentication>((set) => ({
  token: null,
  user: null,

  setAuth: async (token, user) => {
    await localStorage.setItem("token", token);
    await localStorage.setItem("user", JSON.stringify(user));

    set({ token, user });
  },

  hydrate: async () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    set({ token, user: user ? JSON.parse(user) : null });
  },

  logout: async () => {
    await localStorage.removeItem("token");
    await localStorage.removeItem("user");

    set({ token: null, user: null });
  },
}));
