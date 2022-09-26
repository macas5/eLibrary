import TopBar from '../../components/TopBar/TopBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';

const ProductPage = ({ navbarLinks, accountLinks, books, user, backendUrl }) => {
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
      <SearchBar
        isMini={true}
        backendUrl={backendUrl}
      />
      {book && (
        <>
          <ProductInfo book={book} user={user} backendUrl={backendUrl} />
          <Footer />
        </>
      )}
    </>
  );
};

export default ProductPage;
