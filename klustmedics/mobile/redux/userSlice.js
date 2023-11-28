import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  currentUserDetails: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginPending: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.initialDate = Date.now();
    },
    loginFailure: (state, action) => {
      state.loading = false;
    },
    logoutFunc: () => initialState,
    userDetails: (state, action) => {
      state.currentUserDetails = action.payload;
    },
  },
  extraReducers(reducer) {},
});

export const {
  loginPending,
  loginSuccess,
  loginFailure,
  logoutFunc,
  userDetails,
} = userSlice.actions;
export default userSlice.reducer;
