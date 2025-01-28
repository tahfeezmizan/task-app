import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: []
}

const taskSlices = createSlice({
    name: "taskSlics",
    initialState,
    reducers: {

    }
});

export default taskSlices.reducer;