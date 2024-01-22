import React from 'react';
import {
  ExerciseItem,
  ExerciseItemWrap,
  ItemTopBloc,
  Workout,
  StartBtnWrapper,
  StartBtn,
  ArrowIcon,
  ExerciseTitleWrapper,
  FigureIcon,
  ExerciseTitle,
  TargetsList,
  TargetsListItem,
  TargetsListTitle,
  TargetsListText,
} from './ExercisesList.styled';
import capitalizeString from '../../helpers/capitalizeString';

const ExercisesListItem = ({
  name,
  bodyPart,
  equipment,
  target,
  gifUrl,
  burnedCalories,
  time,
}) => {
  return (
    <ExerciseItemWrap>
      <ExerciseItem>
        <ItemTopBloc>
          <Workout>WORKOUT</Workout>
          <StartBtnWrapper>
            <StartBtn onClick={gifUrl}>Start</StartBtn>
            <ArrowIcon>
              <use></use>
            </ArrowIcon>
          </StartBtnWrapper>
        </ItemTopBloc>
        <ExerciseTitleWrapper>
          <FigureIcon>
            <use></use>
          </FigureIcon>
          <ExerciseTitle>{capitalizeString(name)}</ExerciseTitle>
        </ExerciseTitleWrapper>
        <TargetsList>
          <TargetsListItem>
            <TargetsListTitle>Burned calories:</TargetsListTitle>
            <TargetsListText>{burnedCalories}</TargetsListText>
          </TargetsListItem>
          <TargetsListItem>
            <TargetsListTitle>Body part:</TargetsListTitle>
            <TargetsListText>{bodyPart}</TargetsListText>
          </TargetsListItem>
          <TargetsListItem>
            <TargetsListTitle>Target:</TargetsListTitle>
            <TargetsListText>{target}</TargetsListText>
          </TargetsListItem>
        </TargetsList>
      </ExerciseItem>
    </ExerciseItemWrap>
  );
};

export default ExercisesListItem;
