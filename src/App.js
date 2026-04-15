import React from 'react';
import MyProfile from './MyProfile';

function App() {
  const studentData = {
    name: "Aman Kumar Choudhary",
    major: "Computer Science and Artificial Intelligence",
    year: "3rd",
    skills: ["JavaScript Bsic", "React Basic", "CSS"]
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <MyProfile 
        name={studentData.name}
        major={studentData.major}
        year={studentData.year}
        skills={studentData.skills}
      />
    </div>
  );
}

export default App;