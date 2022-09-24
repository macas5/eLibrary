import './ProductInfo.css';

const ProductInfo = ({ book }) => {
  return (
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
                <td>Publication details</td>
                <td>Publishing company, {book.publicationDate}</td>
              </tr>
              <tr>
                <td>Physical data</td>
                <td>{book.form}</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>{book.language}</td>
              </tr>
              <tr>
                <td>Audience</td>
                <td>Book's target audience</td>
              </tr>
              <tr>
                <td>Subject</td>
                <td>Book's genre</td>
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
          <button className="productAddButton">Add to my books</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
