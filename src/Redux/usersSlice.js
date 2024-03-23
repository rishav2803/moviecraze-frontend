import { createSlice } from "@reduxjs/toolkit";
import { LOGIN, REGISTER } from "../Constants/urls";
import { displayToast } from "./toastSlice";

const loadUserFromStorage = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

const initialState = {
  user: loadUserFromStorage(),
  loading: false,
  isLoggedIn: !!localStorage.getItem("user"),
};

export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.isLoggedIn = true;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, setLoading, logoutUser } = slice.actions;

export const login = (userData, cb) => async (dispatch) => {
  console.log(userData);
  dispatch(setLoading(true));
  try {
    const response = await window.fetch(LOGIN, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.status === 201) {
      console.log(data);
      const user = {
        user_id: data.user.user_id,
        userName: data.user.userName,
        email: data.user.email,
      };
      dispatch(setUser(user));
      if (cb) cb();
      dispatch(displayToast("Logged In"));
    }
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const register = (userData, cb) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await window.fetch(REGISTER, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (response.status === 201 && data.user_id !== "") {
      if (cb) cb();
      dispatch(displayToast("Registered User"));
    }
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const selectUser = (state) => state.users.user;

export const selectLoading = (state) => state.users.loading;

export const selectIsLoggedIn = (state) => state.users.isLoggedIn;

export default slice.reducer;
