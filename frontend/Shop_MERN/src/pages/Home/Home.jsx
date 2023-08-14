import { Categories, Header, Hero } from '../../routs';

const Home = () => {
  return (
    <div>
      <Header activeHeading={1}></Header>
      <Hero></Hero>
      <Categories></Categories>
    </div>
  );
};

export default Home;
