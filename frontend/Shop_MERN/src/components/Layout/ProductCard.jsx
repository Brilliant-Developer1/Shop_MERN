import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import styles from '../../styles/styles';
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from 'react-icons/ai';
import ProductDetailsCard from './ProductDetailsCard';

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const { name, image_Url, shop, price, discount_price, total_sell } = data;
  const product_name = name.replace(/\s+/g, '-');

  return (
    <div>
      <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={`${image_Url[0].url}`}
            alt="Product Image"
            className="w-full h-[170px] object-contain"
          />
        </Link>

        <Link to={'/'}>
          <h5 className={`${styles.shop_name}`}>{shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {name.length > 40 ? name.slice(0, 40) + '...' : name}
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

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {price === 0 ? price : discount_price}$
              </h5>
              <h4 className={`${styles.price}`}>
                {price ? price + ' $' : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#68d284]">
              {total_sell} sold
            </span>
          </div>
        </Link>

        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? 'red' : '#333'}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => setClick(!click)}
              color={click ? 'red' : '#333'}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            color="#444"
            onClick={() => setOpen(!open)}
            title="Add to cart"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the 'data' prop
ProductCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_Url: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    shop: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    price: PropTypes.number,
    discount_price: PropTypes.number,
    total_sell: PropTypes.number,
    // Add more prop types as needed
  }).isRequired,
};

export default ProductCard;
