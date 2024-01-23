const { combineReducers } = require('redux');
const { categoriesReducer } = require('./categories/categoriesSlice');
const { exercisesReducer } = require('./exercises/exercisesSlice');

export const commonExercisesReducer = combineReducers({
  categories: categoriesReducer,
  exercises: exercisesReducer,
});
