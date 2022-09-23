import './ProductInfo.css';

const ProductInfo = () => {
  return (
    <div className="productPageWrapper">
        <div className="productInfoContainer">
        <div className="productTitle">Book title</div>
            <div className="productInfoLeft">
                <table className="productInfoTable">
                    <tr>
                        <td>Title and other details</td>
                        <td>Book title</td>
                    </tr>
                    <tr>
                        <td>Author(-s)</td>
                        <td>Author name, surname</td>
                    </tr>
                    <tr>
                        <td>Publication details</td>
                        <td>Publishing company</td>
                    </tr>
                    <tr>
                        <td>Physical data</td>
                        <td>Files</td>
                    </tr>
                    <tr>
                        <td>Language</td>
                        <td>Book's language</td>
                    </tr>
                    <tr>
                        <td>Audience</td>
                        <td>Book's target audience</td>
                    </tr>
                    <tr>
                        <td>Subject</td>
                        <td>Book's genre</td>
                    </tr>
                </table>
            </div>
            <div className="productInfoRight">
                <div className="bookCoverDummy">
                    Book cover
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductInfo;
