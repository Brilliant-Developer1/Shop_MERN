import styles from '../../styles/styles';

import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';
import CountDown from './CountDown';

const EventCard = () => {
  // const { stock, image_Url, discountPrice, sold_out, description, originalPrice } = data;
  //   const { cart } = useSelector((state) => state.cart);
  //   const dispatch = useDispatch();

  //   const addToCartHandler = (data) => {
  //     const isItemExists = cart && cart.find((i) => i._id === data._id);
  //     if (isItemExists) {
  //       toast.error("Item already in cart!");
  //     } else {
  //       if (stock < 1) {
  //         toast.error("Product stock limited!");
  //       } else {
  //         const cartData = { ...data, qty: 1 };
  //         dispatch(addTocart(cartData));
  //         toast.success("Item added to cart successfully!");
  //       }
  //     }
  //   }
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2`}>
      <div className="w-full lg:-w[50%] m-auto p-5">
        <img
          src="https://images.unsplash.com/photo-1609001650223-aa7d7edccac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
          alt="Product Image"
          className="rounded-xl"
        />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14Pro max</h2>
        <p>
          We use cookies and similar tools that are necessary to enable you to
          make purchases, to enhance your shopping experiences, and to provide
          our services, as detailed in our Cookie Notice. We also use these
          cookies to understand how customers use our services (for example, by
          measuring site visits) so we can make improvements. If you agree, we
          will also use cookies to complement your shopping experience across
          Amazon stores as described in our Cookie Notice. This includes using
          first- and third-party cookies which store or access standard device
          information such as a unique identifier. Third parties use cookies for
          the purposes of displaying and measuring personalised
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              $3010
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              $2010
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            150 sold
          </span>
        </div>
        <CountDown />
        <br />
        <div className="flex items-center">
          <Link to={`#`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div className={`${styles.button} text-[#fff] ml-5`}>Add to cart</div>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the 'data' prop
// EventCard.propTypes = {
//   data: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     image_Url: PropTypes.arrayOf(
//       PropTypes.shape({
//         url: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     shop: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }).isRequired,
//     price: PropTypes.number,
//     discount_price: PropTypes.number,
//     total_sell: PropTypes.number,
//     // Add more prop types as needed
//   }).isRequired,
// };

export default EventCard;
