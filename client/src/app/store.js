import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice';
import registerReducer from '../features/register/signUpSlice';
import initPlayerReducer from '../features/player/initPlayerSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        register: registerReducer,
        initplayer: initPlayerReducer,
    },
});