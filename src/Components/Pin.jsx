
import React from 'react';
import './Map.css';

const Marker = (props: any) => {
    const { color, name} = props;
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default Marker;