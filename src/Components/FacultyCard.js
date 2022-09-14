import React from 'react';

function FacultyCard(fProps) { 
  return (
    <div className="div-facultyCard">
        <img className="cardImg" src={require(`../Images/${fProps.picture}`)} alt='DisplayPicture' />
        
        <div className='cardinfo'>
          <span className="cardname" >{fProps.name}</span>
          <span className="carddesignation" >{fProps.designation}</span>
          <span className="cardqualification" >{fProps.qualification}</span>
          <span className="carddepartment" ><b>Department:   </b>{fProps.department}</span>
          <span className="cardareaofinterest" ><b>Area Of Interest: </b>{fProps.areaofinterest}</span>
          <span className="cardemail" >{fProps.email}</span>
        </div>
    </div>
  )
}

export default FacultyCard;
