import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface SessionState {
  isLoggedIn: boolean;
  user_id: string;
  email: string;
  password: string;
  status: string;
  sidebarOpen: boolean;
  selectModalOpen: boolean;
  // error: string;
}

const initialState = {
  isLoggedIn: false,
  user_id: "",
  email: "",
  password: "",
  status: "",
  sidebarOpen: true,
  selectModalOpen: false
};

export const loginRequest = createAsyncThunk(
  "session/LOGIN",
  async (args: { email: string; password: string }) => {
    // const { email, password } = args;
    // const response = await auth.signInWithEmailAndPassword(email, password)
    const response = "login";
    return response;
  }
);

export const slice = createSlice({
  name: "session",
  initialState,
  reducers: {
    //サイドバー開閉管理
    toggleSidebar: (state, action: { payload: boolean }) => {
      console.log("action", action);
      state.sidebarOpen = action.payload;
    }
  },
  extraReducers: {
    "session/login/pending": (state: SessionState, action) => {
      state.status = "loading";
      console.log("state.status:", state.status);
    },
    "session/login/fulfilled": (state: SessionState, action) => {
      state.status = "succeeded";
      console.log("state.status:", state.status);
      state.isLoggedIn = true;
    },
    "session/login/rejected": (state: SessionState, action) => {
      state.status = "failed";
      console.log("action.error", action.error);
    }
  }
});

export const { toggleSidebar } = slice.actions;

export default slice.reducer;
