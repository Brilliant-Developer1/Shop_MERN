// import React from 'react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  // eslint-disable-next-line react/prop-types
  const product_name = d.replace(/\s+/g, '-');

  return (
    <div>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={`${data.image_Url[0].url}`}
            alt="Product Image"
            className="w-full h-[170px] object-contain"
          />
        </Link>

        {/* side options */}
        <Link to={'/'}>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0, 40) + '...' : data.name}
          </h4>

          <div className="flex text-yellow-400">
            <AiFillStar size={20} className="mr-2 cursor-pointer"></AiFillStar>
            <AiFillStar size={20} className="mr-2 cursor-pointer "></AiFillStar>
            <AiFillStar size={20} className="mr-2 cursor-pointer "></AiFillStar>
            <AiFillStar size={20} className="mr-2 cursor-pointer "></AiFillStar>
            <AiOutlineStar
              size={20}
              className="mr-2 cursor-pointer "
            ></AiOutlineStar>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;