import { Routes, Route, Navigate } from 'react-router';
import Exercises from 'pages/Exercises';
import SheredLayout from './SheredLayout/SheredLayout';
import Home from './Home/Home';
import ExercisesCategories from './ExercisesCategories/ExercisesCategories';
import ExercisesList from './ExercisesList/ExercisesList';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SheredLayout />}>
          <Route index element={<Home />} />
          <Route path="exercises" element={<Exercises />}>
            <Route index element={<Navigate to="bodyPart" />} />
            <Route path=":category" element={<ExercisesCategories />} />
            <Route path=":category/:subCategory" element={<ExercisesList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
