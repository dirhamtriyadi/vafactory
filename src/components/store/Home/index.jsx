import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data : null,
    isLoading: false,
}

export const getData = createAsyncThunk("home/getData", async ({cari}) => {
    if (cari) {
        try {
            const response = await axios.get(`http://localhost:8000/api/orders/get/${cari}`)
            return response.data
        } catch (error) {
            throw error
        }
    }
    return
})

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getData.rejected, (state, action) => {
                state.isLoading = false;
                console.log("error", action.error.message);
            })

    },
})

export default homeSlice.reducer;