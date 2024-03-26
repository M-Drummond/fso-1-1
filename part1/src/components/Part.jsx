const Part = (part) => {
  const partDetails = part.part;
  return (
    <p>
      {partDetails.name} - {partDetails.exercises}
    </p>
  );
};

export default Part;
