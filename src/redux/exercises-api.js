import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getCategories = createAsyncThunk(
  'trainings/getCategories',
  async ({ category, page }, thunkAPI) => {
    console.log(category);
    console.log(page);
    try {
      const { data } = await axios.get(
        'http://localhost:3001/api/exercises/categories',
        {
          params: {
            category: category,
            page: page,
          },
        }
      );
      console.log(data);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const getExercises = createAsyncThunk(
  'trainings/getExercises',
  async ({ category, subCategory, page }, thunkAPI) => {
    console.log(subCategory);
    console.log(category);
    console.log(page);
    try {
      const { data } = await axios.get(
        `http://localhost:3001/api/exercises?${category}=${subCategory}`,
        {
          params: {
            page: page,
          },
        }
      );
      console.log(data);
      return data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export { getCategories, getExercises };
