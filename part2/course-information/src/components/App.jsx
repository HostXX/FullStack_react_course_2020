import React from 'react'
import Course from "./Course"


const App = ({ courses }) => {
    return (
        <div>
            <h1>Web developtment curriculum</h1>
            {courses.map((course) => (
                <Course key={course.id} course={course} />
            ))}
        </div>
    );
};

export default App