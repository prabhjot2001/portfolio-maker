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

const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerAction(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
    loginAction(state, action) {
      const { id, email, name, accessToken, refreshToken } = action.payload;

      state.user = { id, name, email };
      state.token = accessToken;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;
    },
    logoutAction(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { registerAction, loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;
