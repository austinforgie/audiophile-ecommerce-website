import { Header, Main, Footer } from "../../components";
import useScrollToTop from "../../hooks/useScrollToTop";

const Home = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
