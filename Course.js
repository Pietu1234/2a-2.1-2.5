import React from 'react';

const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} - {part.exercises} exercises
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <p>
        <strong>
          Total exercises: {course.parts.reduce((sum, part) => sum + part.exercises, 0)}
        </strong>
      </p>
    </div>
  );
};

export default Course;
