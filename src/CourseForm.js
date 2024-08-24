import React, { useState } from 'react';

const CourseForm = ({ addCourse }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleAddCourse = () => {
    // Logic to add a course
    const newCourse = { title: courseTitle, code: courseCode, description: courseDescription };
    addCourse(newCourse);
    setCourseTitle('');
    setCourseCode('');
    setCourseDescription('');
  };

  return (
    <div>
      <input type="text" placeholder="Course title" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} />
      <input type="text" placeholder="Course code" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
      <textarea placeholder="Course description" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />
      
      <button onClick={handleAddCourse}>Add course</button>
    </div>
  );
};

export default CourseForm;
