import React from 'react';
import './CourseList.css';
import { FaTrash, FaSearch } from 'react-icons/fa';

function CourseList({ courses, setCourses }) {
    const handleDelete = (id) => {
        setCourses(courses.filter(course => course.id !== id));
    };

    const handleView = (id) => {
        console.log("Viewing course with id:", id);
    };

    return (
        <div className="course-list">
            <table>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.code}</td>
                            <td>
                                <button onClick={() => handleView(course.id)}><FaSearch /></button>
                                <button onClick={() => handleDelete(course.id)}><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CourseList;
