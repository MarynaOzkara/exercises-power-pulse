import { Routes, Route, Navigate } from 'react-router';
import SheredLayout from './SheredLayout/SheredLayout';
import { lazy } from 'react';

const Home = lazy(() => import('./Home/Home'));
const Exercises = lazy(() => import('../pages/Exercises'));
const ExercisesCategories = lazy(() =>
  import('./ExercisesCategories/ExercisesCategories')
);
const ExercisesList = lazy(() => import('./ExercisesList/ExercisesList'));

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
