import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

const playerDefaultState = {
    _id: null,
    email: null,
    avatar: null,
    exp: null,
    power: null,
    silver: null,
    active: null,       
    gold: null,
    elo: null,
    playerName:null,
}

const initialState = {
    player: playerDefaultState,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const login = createAsyncThunk(
    '/login',
    async (player, thunkAPI) => {
        try {
            const response = await authService.login(player);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.player = action.payload;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.player =null;
        })
    }
})

export default authSlice.reducer;
