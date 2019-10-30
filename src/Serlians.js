import React from 'react';
import Serlian from './Serlian';

function Serlians(props) {
  
    return (
      <div className="Serlians">
        {props.serlians.map(serlian => <Serlian key={serlian.id} serlian={serlian} />)}
      </div>
    );
  }
  
  export default Serlians;