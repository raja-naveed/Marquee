import React from 'react';
import { motion } from 'framer-motion';
import BrandImage from './Brand';

const BrandColumn = ({ images, direction }) => {
  const columnVariants = {
    animate: {
      y: direction === 'up' ? '100%' : '-100%',
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  return (
    // <motion.div
    //   className="brand-column"
    //   variants={columnVariants}
    //   animate="animate"
    //   style={{ flexDirection: direction === 'up' ? 'column-reverse' : 'column' }}
    // >
    <div>
      {images.map((imageUrl, index) => (
      <BrandImage key={index} imageUrl={imageUrl} />
      ))}
    {/* // </motion.div> */}
    </div>
  );
};

export default BrandColumn;
