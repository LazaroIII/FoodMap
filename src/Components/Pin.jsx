
import React from 'react';
import './Map.css';

const Pin = (props: any) => {
    const { color, name } = props;
    return (
      <div className="pin"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default Pin;