import {
  BestDeals,
  Categories,
  Events,
  FeaturedProduct,
  Footer,
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
      <Footer></Footer>
    </div>
  );
};

export default Home;
