import React from 'react';
import { CategoryLink, NavWrap } from './CategoriesNav.styled';
import { setCategory } from '../../redux/categories/categoriesSlice';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/exercises-api';

const CategoriesNav = () => {
  const categories = [
    { title: 'Body parts', category: 'bodyPart' },
    { title: 'Equipment', category: 'equipment' },
    { title: 'Muscles', category: 'target' },
  ];
  const dispatch = useDispatch();
  return (
    <NavWrap>
      {categories.map(({ title, category }, index) => (
        <li key={index}>
          <CategoryLink
            to={category}
            onClick={() => {
              dispatch(setCategory(title));
              dispatch(getCategories({ category: title }));
            }}
          >
            {title}
          </CategoryLink>
        </li>
      ))}
    </NavWrap>
  );
};

export default CategoriesNav;
