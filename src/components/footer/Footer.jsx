import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        
        <div className="footer-column">
          <h3>Popular Categories</h3>
          <ul>
            <li><NavLink to="/cars">Cars</NavLink></li>
            <li><NavLink to="/mobiles">Mobile Phones</NavLink></li>
            <li><NavLink to="/bikes">Bikes</NavLink></li>
            <li><NavLink to="/jobs">Jobs</NavLink></li>
          </ul>
        </div>

      
        <div className="footer-column">
          <h3>Trending Searches</h3>
          <ul>
            <li><NavLink to="/iphone">iPhone</NavLink></li>
            <li><NavLink to="/houses">Houses</NavLink></li>
            <li><NavLink to="/motorcycles">Motorcycles</NavLink></li>
            <li><NavLink to="/laptops">Laptops</NavLink></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>About OLX</h3>
          <ul>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/business">OLX for Businesses</NavLink></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>
      </div>

  
      <div className="footer-bottom">
        <p>Free Classifieds in Pakistan © {new Date().getFullYear()} OLX Clone</p>
        <p>Made with ❤️ by Zaid</p>
      </div>
    </footer>
  );
}
