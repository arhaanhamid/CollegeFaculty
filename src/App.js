import React from 'react';
import './index.css';
import FacultyCard from './Components/FacultyCard';
import FacultyData from './Components/FacultyData';


function App() {
  const facultyCards = FacultyData.map(fProps => {
      return(
          <FacultyCard 
            {...fProps}
          />
      )
  })

  return (
    <div className="div-cardbarHolder">
      <div className="div-cardbar">
        {facultyCards}
      </div>
    </div>
  );
}

export default App;
