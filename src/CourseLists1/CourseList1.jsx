import React from 'react';
import './CourseList1.css';
import { FaTrash, FaSearch } from 'react-icons/fa';

function CourseList1({ courses }) {
    const handleDelete = (id) => {
        console.log("Instance with id deleted:", id);
    };

    const handleView = (id) => {
        console.log("Viewing instance with id:", id);
    };

    return (
        <div className="course-list">
            <div className='btn-list-c'>
                <input type="text" placeholder="Year" />
                <select>
                    <option value="">Select course</option>
                    {courses.map(course => (
                        <option key={course.id} value={course.id}>{course.title}</option>
                    ))}
                </select>
                <button className="list-courses-btn1">List courses</button>
            </div>
            <table className='table-1'>
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

export default CourseList1;
