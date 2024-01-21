import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ExercisesCategoriesWrap = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
`;
export const SubCategoryList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style-type: none;
`;
export const SubCategoryItem = styled.li`
  width: calc((100% - 4 * 16px) / 5);
`;
export const SubCategoryLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
export const SubCategoryWrap = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background-image: linear-gradient(
    0deg,
    rgba(4, 4, 4, 0.5) 0%,
    rgba(4, 4, 4, 0.5) 100%
  );
  position: relative;
`;
export const SubCategoryImg = styled.img`
  display: block;
  width: 100%;
`;
export const DescriptionWrap = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const SubCategoryTitle = styled.p`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  white-space: nowrap;
`;
export const CategoryTitle = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;
export const Pagination = styled.div`
  margin-top: 32px;
  text-align: center;
`;
