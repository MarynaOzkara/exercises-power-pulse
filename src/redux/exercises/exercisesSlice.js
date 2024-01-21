import { createSlice } from '@reduxjs/toolkit';
import { getExercises } from '../../redux/exercises-api';

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState: {
    items: [],
    total: 0,
    page: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getExercises.pending, state => {
        state.isLoading = true;
      })
      .addCase(getExercises.fulfilled, (state, { payload }) => {
        // console.log(typeof payload.page);
        state.items = payload.data;
        state.page = payload.page + 1;
        state.total = payload.total;
        state.isLoading = false;
      })
      .addCase(getExercises.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const exercisesReducer = exercisesSlice.reducer;
