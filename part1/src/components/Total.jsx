const Total = (course) => {
  const totalExercies =
    course.parts.parts[0].exercises +
    course.parts.parts[1].exercises +
    course.parts.parts[2].exercises;

  return <p>Total Number of exercises {totalExercies} </p>;
};

export default Total;
