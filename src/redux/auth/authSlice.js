import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from "./authService.js";

const user = JSON.parse(localStorage.getItem("profile"));
//?FetchRegister
export const register = createAsyncThunk(`auth/register `, async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
        return thunkAPI.rejectWithValue(message)
    }

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
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

    }
});
export const {reset} = authSlice.actions;
export default authSlice.reducer;