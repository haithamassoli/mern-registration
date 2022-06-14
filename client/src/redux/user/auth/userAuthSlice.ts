import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserAuthState {
  isLoggedIn: boolean | null;
  loggedInUserData: any;
  error: string;
  loading: boolean;
  expiredSession: boolean;
}
const loggedInUserData = JSON.parse(localStorage.getItem('loggedInUserData') || '{}');

const initialState: UserAuthState = {
  isLoggedIn:loggedInUserData === undefined ? null : true,
  loggedInUserData:loggedInUserData === undefined ? {} : loggedInUserData,
  error:'',
  loading:false,
  expiredSession: false
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserAuthState>) => {
      state.loggedInUserData = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('loggedInUserData', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.loggedInUserData = {};
      state.isLoggedIn = false;
      localStorage.removeItem('loggedInUserData');
    },
    sessionExpired: (state) => {
      state.expiredSession = true;
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout, sessionExpired } = userAuthSlice.actions;
export default userAuthSlice.reducer;

