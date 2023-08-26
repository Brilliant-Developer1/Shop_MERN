import {
  BestDeals,
  Categories,
  Events,
  FeaturedProduct,
  Header,
  Hero,
} from '../../routs';

const Home = () => {
  return (
    <div>
      <Header activeHeading={1}></Header>
      <Hero></Hero>
      <Categories></Categories>
      <BestDeals></BestDeals>
      <Events></Events>
      <FeaturedProduct></FeaturedProduct>
    </div>
  );
};

export default Home;
