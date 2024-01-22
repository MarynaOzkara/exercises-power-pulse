import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  selectListCategories,
  selectPageCategories,
  selectTotalCategories,
} from '../../redux/selectors';
import {
  SubCategoryLink,
  SubCategoryItem,
  SubCategoryList,
  SubCategoryImg,
  SubCategoryWrap,
  DescriptionWrap,
  SubCategoryTitle,
  CategoryTitle,
  Pagination,
} from './ExercisesCategories.styled';
import capitalizeString from '../../helpers/capitalizeString';
import { getCategories } from '../../redux/exercises-api';
import { useLocation } from 'react-router';

const ExercisesCategories = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const subCategories = useSelector(selectListCategories);
  const page = useSelector(selectPageCategories);
  const total = useSelector(selectTotalCategories);
  const location = useLocation();
  // console.log(category);
  // console.log(page);
  // console.log(total);
  return (
    <>
      <div>
        <SubCategoryList>
          {subCategories.map(({ _id, name, imgURL, filter }) => (
            <SubCategoryItem key={_id}>
              <SubCategoryLink to={name} state={{ from: location }}>
                <SubCategoryWrap>
                  <SubCategoryImg src={imgURL} alt={name} />
                  <DescriptionWrap>
                    <SubCategoryTitle>
                      {capitalizeString(name)}
                    </SubCategoryTitle>
                    <CategoryTitle>{filter}</CategoryTitle>
                  </DescriptionWrap>
                </SubCategoryWrap>
              </SubCategoryLink>
            </SubCategoryItem>
          ))}
        </SubCategoryList>
      </div>
      {total > 10 && (
        <Pagination>
          <button
            onClick={() =>
              dispatch(getCategories({ category: category, page: page }))
            }
          >
            Load more
          </button>
        </Pagination>
      )}
    </>
  );
};

export default ExercisesCategories;
