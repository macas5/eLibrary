import './ProductInfo.css';
import axios from 'axios';
import { useState } from 'react';

const ProductInfo = ({ book, user, backendUrl }) => {
  const [style, setStyle] = useState('');

  const addBook = async () => {
    if (user) {
      if (user.booksOwned.includes(book._id)) {
        return;
      }
      var booksOwnedNew = user.booksOwned;
      booksOwnedNew.push(book._id);
      try {
        await axios.put(
          `${backendUrl}/user/update/${user._id}`,
          { booksOwned: booksOwnedNew },
          { withCredentials: true }
        );
        setStyle('buttonDisabled');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    book && (
      <div className="productPageWrapper">
        <div className="productInfoContainer">
          <div className="productTitle">{book.title}</div>
          <div className="productInfoLeft">
            <table className="productInfoTable">
              <tbody>
                <tr>
                  <td>Title and other details</td>
                  <td>{book.title}</td>
                </tr>
                <tr>
                  <td>Author(-s)</td>
                  <td>{book.author}</td>
                </tr>
                <tr>
                  <td>Publication date</td>
                  <td>{book.publicationDate}</td>
                </tr>
                <tr>
                  <td>Physical data</td>
                  <td>{book.form}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>{book.language}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="productInfoRight">
            <img
              className="productImage"
              src={
                book.imageLink !== ''
                  ? book.imageLink
                  : 'https://media.istockphoto.com/vectors/photo-coming-soon-image-icon-vector-illustration-isolated-on-white-vector-id1193060544?k=20&m=1193060544&s=612x612&w=0&h=MI8y2q1HsY4TEAZD3tNCJN3bmc39N3pnFKC2KKNDUmE='
              }
              alt={book.title}
            />
            <button
              onClick={addBook}
              className={
                !user || user.booksOwned.includes(book._id)
                  ? 'productAddButton buttonDisabled'
                  : 'productAddButton ' + { style }
              }
            >
              {!user
                ? "You aren't logged in"
                : user.booksOwned.includes(book._id)
                ? 'You already own this book'
                : 'Add to my books'}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductInfo;
