import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './categories/categoriesSlice';
import { exercisesReducer } from './exercises/exercisesSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    exercises: exercisesReducer,
  },
});
export default store;
