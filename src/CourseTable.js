import React from 'react';
import { FaSearch, FaTrashAlt } from 'react-icons/fa';

const CourseTable = ({ courses, removeCourse }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.code}</td>
              <td>
                <FaSearch />
                <FaTrashAlt onClick={() => removeCourse(index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
