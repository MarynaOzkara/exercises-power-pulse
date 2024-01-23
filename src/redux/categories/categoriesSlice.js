import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../../redux/exercises-api';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    category: 'bodyPart',
    items: [],
    limit: 0,
    total: 0,
    page: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    setCategory(state, action) {
      console.log(action.payload);
      state.category = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        // console.log(typeof payload.page);
        state.items = payload.data;
        state.limit = payload.limit;
        state.page = payload.page;
        state.total = payload.total;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const categoriesReducer = categoriesSlice.reducer;
export const { setCategory } = categoriesSlice.actions;
