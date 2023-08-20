import {
  BestDeals,
  Categories,
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
      <FeaturedProduct></FeaturedProduct>
    </div>
  );
};

export default Home;
