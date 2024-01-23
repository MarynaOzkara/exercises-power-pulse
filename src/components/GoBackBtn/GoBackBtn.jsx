import { useLocation, useNavigate } from 'react-router';
import { BackBtn, ArrowIcon, TextBtn } from './GoBackBtn.styled';
import icons from '../../assets/icons/icons.svg';

const GoBackBtn = () => {
  const location = useLocation();
  const { from } = location.state;
  const navigate = useNavigate();
  console.log(from);
  const handleClickBackBtn = () => {
    navigate(from.pathname);
  };
  return (
    <>
      <BackBtn onClick={() => handleClickBackBtn()}>
        <ArrowIcon>
          <use href={`${icons}#icon-back-arrow`}></use>
        </ArrowIcon>
        <TextBtn>Back</TextBtn>
      </BackBtn>
    </>
  );
};

export default GoBackBtn;
