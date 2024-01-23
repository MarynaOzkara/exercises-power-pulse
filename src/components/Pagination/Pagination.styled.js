import styled from 'styled-components';

export const PaginationWrap = styled.div`
  margin-top: 32px;
`;
export const PaginationList = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
export const NavigationBtn = styled.button`
  width: 14px;
  height: 14px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: 1.5px solid #e6533c;
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  /* background-color: rgba(239, 237, 232, 0.1); */
`;
export const NavigationDot = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  fill: #e6533c;
`;
