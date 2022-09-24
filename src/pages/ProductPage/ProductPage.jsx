import TopBar from '../../components/TopBar/TopBar';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';

const ProductPage = ({ navbarLinks, accountLinks, books, user }) => {
  const { bookId } = useParams();

  const book = books
    ? books.find((obj) => {
        return obj._id === bookId;
      })
    : null;

  return (
    <>
      <TopBar
        navbarLinks={navbarLinks}
        accountLinks={accountLinks}
        user={user}
      />
      {book && (
        <>
          <ProductInfo book={book} />
          <Footer />
        </>
      )}
    </>
  );
};

export default ProductPage;
