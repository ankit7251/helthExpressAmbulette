import { createSlice } from "@reduxjs/toolkit";

const indexSlice = createSlice({
  name: "index",
  initialState: {
    index: 0,
  },
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { setIndex } = indexSlice.actions;

export default indexSlice.reducer;
