import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerSection">
        <div className="footerSectionTitle">
          <h3>Useful links</h3>
        </div>
        <div className="footerLinksWrapper">
          <div className="footerLink">
            <div>Home</div>
          </div>
          <div className="footerLink">
            <div>E-Books</div>
          </div>
          <div className="footerLink">
            <div>Most popular</div>
          </div>
        </div>
      </div>
      <div className="footerSection">
        <div className="footerSectionTitle">
          <h3>Contacts</h3>
        </div>
        <div className="footerContactsWrapper">
          <div className="footerContact">Phone number: 12345678</div>
          <div className="footerContact">Email: info@elibrary.com</div>
          <div className="footerContact">Address: Elibrary 1234</div>
        </div>
      </div>
      <div className="footerSection">
        <div className="footerSectionTitle">
          <h3>Logo</h3>
        </div>        
      </div>
    </div>
  );
};

export default Footer;
