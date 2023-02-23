import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import * as api from "../../api/index.js";

const user = JSON.parse(localStorage.getItem('user'))
//?FetchRegister
export const fetchRegister = createAsyncThunk(`auth/fetchRegister `, async (user, thunkAPI) => {
    try {
        return await api.signUp(user);
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        return thunkAPI.rejectWithValue(message)
    }

});
//?login

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (user, thunkAPI) => {
    try {
        return await api.signIn(user);
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
//?logOut
export const logOut = createAsyncThunk('auth/logOut', async () => {
    await api.logOut()
})
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: user ? user : null,
        loading: false,
        errors: false,
        isSuccess: false,
        message: ""
    },
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.errors = false;
            state.isSuccess = false;
            state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegister.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.loading = false;
                state.isSuccess = true;
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify(state.user));
            })
            .addCase(fetchRegister.rejected, (state, action) => {
                state.loading = false
                state.errors = true
                state.message = action.payload
                state.user = null
            })
            .addCase(fetchLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.loading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.loading = false
                state.errors = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = null;
            })
    }
});
export const {reset} = authSlice.actions;
export default authSlice.reducer;