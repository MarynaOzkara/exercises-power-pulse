import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getExercises } from '../../redux/exercises-api';
import { selectExercises } from '../../redux/selectors';
import ExercisesListItem from './ExercisesListItem';
import { ExercisesListWrap } from './ExercisesList.styled';

const ExercisesList = () => {
  const { category, subCategory } = useParams();
  const dispatch = useDispatch();

  const exercises = useSelector(selectExercises);

  useEffect(() => {
    dispatch(getExercises({ category: category, subCategory: subCategory }));
  }, [dispatch, category, subCategory]);

  return (
    <div>
      <ExercisesListWrap>
        {exercises.map(
          ({
            _id,
            name,
            bodyPart,
            equipment,
            target,
            gifUrl,
            burnedCalories,
            time,
          }) => (
            <ExercisesListItem
              key={_id}
              name={name}
              gifUrl={gifUrl}
              bodyPart={bodyPart}
              equipment={equipment}
              target={target}
              burnedCalories={burnedCalories}
              time={time}
            />
          )
        )}
      </ExercisesListWrap>
    </div>
  );
};

export default ExercisesList;
