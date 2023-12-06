import React from 'react';

const BrandImage = ({ imageUrl }) => {
  return (
    <div className="brand-image">
      <img src={imageUrl} alt="Brand" />
    </div>
  );
};

export default BrandImage;
