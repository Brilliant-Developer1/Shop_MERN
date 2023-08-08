import { Link } from 'react-router-dom';
import styles from '../../styles/styles';
import logo from '../../assets/images/homePage/Shop_logo.jpeg';

const Header = () => {
  return (
    <div className={`${styles.section}`}>
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={logo} alt="Site logo" width="180" height="50" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
