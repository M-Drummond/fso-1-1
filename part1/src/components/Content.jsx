import Part from "./Part";

const Content = (course) => {
  const parts = course.parts.parts;

  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  );
};

export default Content;
