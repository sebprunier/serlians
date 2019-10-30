import React from 'react';

function Serlian(props) {
    const serlian = props.serlian;
    return (
      <div className="Serlian">
        <img onError={(e) => e.target.src='/images/no-photo.png'} className="Serlian-Photo" src={`/images/${serlian.id}.jpg`} />
        <div className="Serlian-Name">{serlian.firstname} {serlian.lastname.toUpperCase()}</div>
        <div className="Serlian-Role">{serlian.role}</div>
        <div className="Serlian-Competence">{serlian.competences.map(c => <span>{c}</span>)}</div>
        <div className="Serlian-Mail"><a href={`mailto:${serlian.mail}`}>envoyer un mail</a></div>
      </div>
    );
  }
  
  export default Serlian;