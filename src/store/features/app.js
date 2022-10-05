import { createSelector, createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    openDialog: false,
  },
  reducers: {
    setOpenDialog: (state, action) => {
      state.openDialog = action.payload;
    },
  },
});

const { reducer, actions } = appSlice;

export const { setOpenDialog: _setOpenDialog } = actions;

export const appSelector = (state) => state.appReducer;

export const openDialogSlct = createSelector(
  appSelector,
  (state) => state.openDialog
);

export default reducer;
