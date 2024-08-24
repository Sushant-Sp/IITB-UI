import React, { useState } from 'react';
import './CourseForm.css';
import CourseList from '../CourseLists/CourseList';
import CourseList1 from '../CourseLists1/CourseList1';

function CourseForm() {
    const [courseTitle, setCourseTitle] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [courses, setCourses] = useState([]);

    const handleAddCourse = () => {
        if (courseTitle && courseCode) {
            const newCourse = {
                id: courses.length + 1,
                title: courseTitle,
                code: courseCode,
                description: courseDescription
            };
            setCourses([...courses, newCourse]);
            setCourseTitle('');
            setCourseCode('');
            setCourseDescription('');
        }
    };

    const handleAddInstance = () => {
        if (selectedCourse && year && semester) {
            console.log("Instance Added:", { selectedCourse, year, semester });
            // Add instance logic here
        }
    };

    const handleRefresh = () => {
        setSelectedCourse('');
        setYear('');
        setSemester('');
        console.log("Refresh clicked");
    };

    return (
        <div>
            <div className="course-form">
                <div>
                    <input 
                        type="text" 
                        placeholder="Course title" 
                        value={courseTitle} 
                        onChange={(e) => setCourseTitle(e.target.value)} 
                    />
                    <br/><br/>
                    <input  
                        type="text" 
                        placeholder="Course code" 
                        value={courseCode} 
                        onChange={(e) => setCourseCode(e.target.value)} 
                    />
                    <br/><br/>
                    <input  
                        type="text" 
                        placeholder="Course description" 
                        value={courseDescription} 
                        onChange={(e) => setCourseDescription(e.target.value)} 
                    />
                    <br/><br/>
                    <button onClick={handleAddCourse}>Add course</button>
                </div>
                
                <div>
                    <select 
                        value={selectedCourse} 
                        onChange={(e) => setSelectedCourse(e.target.value)}
                    >
                        <option value="">Select course</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.id}>{course.title}</option>
                        ))}
                    </select>
                    <button onClick={handleRefresh}>Refresh</button>
                    <br/><br/>
                    <input 
                        type="text" 
                        placeholder="Year" 
                        value={year} 
                        onChange={(e) => setYear(e.target.value)} 
                    />
                    <br/><br/>
                    <input 
                        type="text" 
                        placeholder="Semester" 
                        value={semester} 
                        onChange={(e) => setSemester(e.target.value)} 
                    />
                    <br/><br/>
                    <button onClick={handleAddInstance}>Add Instance</button>
                </div>
            </div>
            <hr/>
            <CourseList courses={courses} setCourses={setCourses}/>
            <hr/>
            <CourseList1 courses={courses}/>
        </div>
    );
}

export default CourseForm;
