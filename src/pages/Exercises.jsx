import CategoriesNav from 'components/CagegoriesNav/CategoriesNav';
import {
  NavPageWrap,
  CategoriesWrap,
  GoBackBtnWrap,
} from 'components/CagegoriesNav/CategoriesNav.styled';
import TitlePage from 'components/TitlePage/TitlePage';
import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import capitalizeString from '../helpers/capitalizeString';
import { Outlet, useParams } from 'react-router';
import { getCategories } from '../redux/exercises-api';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const Exercises = () => {
  const { subCategory } = useParams();
  // console.log(category);
  // console.log(subCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories({ category: 'Body parts' }));
  }, [dispatch]);
  return (
    <>
      {subCategory && (
        <GoBackBtnWrap>
          <GoBackBtn />
        </GoBackBtnWrap>
      )}
      <NavPageWrap>
        {subCategory ? (
          <TitlePage title={capitalizeString(subCategory)} />
        ) : (
          <TitlePage title="Exercises" />
        )}

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
