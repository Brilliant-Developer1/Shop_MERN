import {
  BestDeals,
  Categories,
  Events,
  FeaturedProduct,
  Header,
  Hero,
  Sponsored,
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
      <Sponsored></Sponsored>
    </div>
  );
};

export default Home;
