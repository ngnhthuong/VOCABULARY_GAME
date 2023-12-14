import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initPlayerService from './initPlayerService';
import { toast } from 'react-toastify';

const initPlayerData = {
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
  initPlayer: initPlayerData,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const initplayer = createAsyncThunk(
  '/intiplayer',
  async (initPlayerNow, thunkAPI) => {
    try {
      const response = await initPlayerService.initplayer(initPlayerNow);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const initPlayerSilice = createSlice({
  name: 'initPlayer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initplayer.pending, (state) => {
      state.isLoading = true;
    })

    builder.addCase(initplayer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.initPlayer = action.payload;
      if (state.isSuccess === true) {
        toast.info("Init player successful!");
      }
    })

    builder.addCase(initplayer.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.initPlayer = action.payload;
      if (state.isError === true) {
        toast.error("User name existing!");
      }
    });
  },
});

export default initPlayerSilice.reducer;
