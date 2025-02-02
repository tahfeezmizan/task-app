import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Eve",
    email: "allice@gmail.com",
}

const userSlices = createSlice({
    name: "userSlices",
    initialState,
    reducers: {},
});

export const { } = userSlices.actions;
export default userSlices.reducer;  