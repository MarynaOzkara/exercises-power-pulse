import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectCategory,
  selectLimitCategories,
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
  SubCategoriesWrap,
} from './ExercisesCategories.styled';
import capitalizeString from '../../helpers/capitalizeString';
import { useLocation } from 'react-router';
import Pagination from 'components/Pagination/Pagination';

const ExercisesCategories = () => {
  const category = useSelector(selectCategory);
  const subCategories = useSelector(selectListCategories);
  const page = useSelector(selectPageCategories);
  const total = useSelector(selectTotalCategories);
  const limit = useSelector(selectLimitCategories);
  const location = useLocation();

  // console.log(category);
  // console.log(page);
  // console.log(total);
  // console.log(limit);
  return (
    <>
      <SubCategoriesWrap>
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
      </SubCategoriesWrap>

      {total > 10 && (
        <Pagination
          page={page}
          category={category}
          limit={limit}
          total={total}
        />
      )}
    </>
  );
};

export default ExercisesCategories;
