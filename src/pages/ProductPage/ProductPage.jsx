import TopBar from '../../components/TopBar/TopBar';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';

const ProductPage = ({ navbarLinks, accountLinks, books }) => {  

  const { bookId } = useParams();
  
  const book = books.find(obj => {
    return obj.id === bookId;
  });

  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
      />
      <ProductInfo
        book={ book }
      />
      <Footer />
    </>
  );
};

export default ProductPage;
