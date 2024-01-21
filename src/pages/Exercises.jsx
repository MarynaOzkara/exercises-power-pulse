import CategoriesNav from 'components/CagegoriesNav/CategoriesNav';
import {
  NavPageWrap,
  CategoriesWrap,
} from 'components/CagegoriesNav/CategoriesNav.styled';
import TitlePage from 'components/TitlePage/TitlePage';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Outlet } from 'react-router';
import { getCategories } from '../redux/exercises-api';
import { selectCategory } from '../redux/selectors';

const Exercises = () => {
  const category = useSelector(selectCategory);
  console.log(category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories({ category: 'Body parts' }));
  }, [dispatch]);
  return (
    <>
      <NavPageWrap>
        <TitlePage title="Exercises" />
        <CategoriesNav />
      </NavPageWrap>
      <CategoriesWrap>
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </CategoriesWrap>
    </>
  );
};

export default Exercises;
