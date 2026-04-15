
import React from 'react';

const MyProfile = ({ name, major, year, skills }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p><strong>Major:</strong> {major}</p>
      <p><strong>Year:</strong> {year}</p>
      <div>
        <strong>Skills:</strong>
        <ul style={styles.list}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    maxWidth: '300px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif'
  },
  name: {
    color: '#2c3e50',
    marginTop: '0'
  },
  list: {
    paddingLeft: '20px'
  }
};

export default MyProfile;