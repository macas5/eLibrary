import TopBar from '../../components/TopBar/TopBar';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Footer from '../../components/Footer/Footer';

const ProductPage = ({ navbarLinks, accountLinks }) => {
  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <ProductInfo />
      <Footer />
    </>
  );
};

export default ProductPage;
