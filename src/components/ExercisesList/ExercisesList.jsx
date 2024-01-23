import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getExercises } from '../../redux/exercises-api';
import {
  selectExercises,
  selectLimitExercises,
  selectPageExercises,
  selectTotalExercises,
} from '../../redux/selectors';
import ExercisesListItem from './ExercisesListItem';
import { ExercisesListWrap } from './ExercisesList.styled';
import InfiniteScroll from 'react-infinite-scroll-component';

const ExercisesList = () => {
  const { category, subCategory } = useParams();
  const dispatch = useDispatch();
  const exercises = useSelector(selectExercises);
  const page = useSelector(selectPageExercises);
  const total = useSelector(selectTotalExercises);
  const limit = useSelector(selectLimitExercises);
  const totalPages = Math.ceil(total / limit);
  console.log(totalPages);
  console.log(page);

  useEffect(() => {
    dispatch(getExercises({ category: category, subCategory: subCategory }));
  }, [dispatch, category, subCategory]);

  const handleNextPage = () => {
    dispatch(
      getExercises({
        category: category,
        subCategory: subCategory,
        page: page,
      })
    );
  };

  return (
    <>
      <InfiniteScroll
        dataLength={limit}
        next={handleNextPage}
        hasMore={exercises}
      >
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
      </InfiniteScroll>
    </>
  );
};

export default ExercisesList;
