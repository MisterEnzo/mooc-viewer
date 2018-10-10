import React, { PropTypes } from 'react';

const renderCourse = (courses) => {
  courses.map((course, index) =>
    <li key={index}>
      course
    </li>
  );
};

const CourseList = ( props ) => {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {props.courses}
      </ul>
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
