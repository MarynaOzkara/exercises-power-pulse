import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/exercises-api';
import {
  PaginationWrap,
  PaginationList,
  NavigationBtn,
  NavigationDot,
} from './Pagination.styled';
import icons from '../../assets/icons/icons.svg';

const Pagination = ({ limit, total, category, page }) => {
  const dispatch = useDispatch();
  const pageNubers = [];
  const numbersDots = Math.ceil(total / limit);
  for (let i = 1; i <= numbersDots; i++) {
    pageNubers.push(i);
  }
  console.log(page);

  return (
    <PaginationWrap>
      <PaginationList>
        {pageNubers.map(number => (
          <li key={number}>
            <NavigationBtn
              onClick={() => {
                // console.log(number);
                dispatch(getCategories({ category: category, page: number }));
              }}
            >
              <NavigationDot>
                <use href={`${icons}#icon-ellipse`}></use>
              </NavigationDot>
            </NavigationBtn>
          </li>
        ))}
      </PaginationList>
    </PaginationWrap>
  );
};

export default Pagination;
