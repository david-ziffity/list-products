import React from 'react';

const Image = ({url, name, size}) => {
    return (
      <img src={url+"?format=A_"+size} alt={name} />
      );
};

export default Image;