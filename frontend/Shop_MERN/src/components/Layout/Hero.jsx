// import React from 'react';

import { Link } from 'react-router-dom';
import styles from '../../styles/styles';

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div
        className={`${styles.section} w-[90%] 800px:w-[60%] backdrop-blur-sm border-solid border-2 border-white hover:border-dotted p-5 rounded-lg`}
      >
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#000000ba] font-[600] capitalize`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[600] text-[#000000ba]">
          Discover the art of transforming spaces with our Home Decoration
          website. Explore a curated collection of exquisite furniture, stylish
          accessories, and captivating decor ideas that inspire and elevate your
          living spaces. From timeless classics to contemporary designs, our
          platform offers a world of inspiration for creating your dream home
          ambiance.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
