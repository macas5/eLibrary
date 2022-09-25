import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerSection">
        <div className="footerSectionTitle">
          <h3>Useful links</h3>
        </div>
        <div className="footerLinksWrapper">
          <Link to="/" className="footerLink">
            Home
          </Link>
          <Link to="/search/?readonline=true" className="footerLink">
            E-Books
          </Link>
          <Link to="/" className="footerLink">
            Most popular
          </Link>
        </div>
      </div>
      <div className="footerSection">
        <div className="footerSectionTitle">
          <h3>Contacts</h3>
        </div>
        <div className="footerContactsWrapper">
          <div className="footerLink">Phone number: 12345678</div>
          <div className="footerLink">Email: info@elibrary.com</div>
          <div className="footerLink">Address: Elibrary 1234</div>
        </div>
      </div>
      <div className="footerSection">
        <div className="footerSectionTitle">
          <img className="footerLogoImage" src="https://e-library.smpn10.bekasikota.go.id/uploads/settings/df8f41ef77b716413f7f93fbb7bf8dcd.png"></img>
        </div>        
      </div>
    </div>
  );
};

export default Footer;
