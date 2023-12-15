import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import signUpService from './signUpService';
import { toast } from 'react-toastify';
const registerDefaultState = {
  email: null,
  avatar: null,
  exp: null,
  power: null,
  active: null,
  silver: null,
  gold: null,
  elo: null,
  playerName: null,
};

const initialState = {
  registerPlayer: registerDefaultState,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk(
  '/register',
  async (playerRegist, thunkAPI) => {
    try {
      const response = await signUpService.register(playerRegist);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUpSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    })

    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.registerPlayer = action.payload;
      if (state.isSuccess === true) {
        toast.info("Register successful!");
      }
    })

    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload;
      if (state.isError === true) {
        toast.error("Existing Emails!");
      }
    });
  },
});

export default signUpSlice.reducer;
