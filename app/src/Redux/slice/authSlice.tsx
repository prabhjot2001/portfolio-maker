import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: null | {
    id: string;
    name: string;
    email: string;
  };
  token: null | string;
  refreshToken: null | string;
  isAuthenticated: boolean;
}

const loadFromLocalStorage = (): AuthState => {
  const storedData = localStorage.getItem("authState");
  if (storedData) {
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
    }
  }
  return {
    user: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
  };
};

const saveToLocalStorage = (state: AuthState) => {
  localStorage.setItem("authState", JSON.stringify(state));
};

const initialState: AuthState = loadFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerAction(state, action) {
      const { id, email, name, accessToken, refreshToken } = action.payload;

      state.user = { id, name, email };
      state.token = accessToken;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;

      saveToLocalStorage(state);
    },
    loginAction(state, action) {
      const { id, email, name, accessToken, refreshToken } = action.payload;

      state.user = { id, name, email };
      state.token = accessToken;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;

      saveToLocalStorage(state);
    },
    logoutAction(state) {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.isAuthenticated = false;

      saveToLocalStorage(state);
    },
  },
});

export const { registerAction, loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
