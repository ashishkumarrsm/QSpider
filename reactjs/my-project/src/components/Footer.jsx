import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          {/* ===== About Section ===== */}
          <div className="footer-section">
            <h3>ShopEase</h3>
            <p>
              Your one-stop online store for fashion, electronics, and more.
              Shop smart and save more with ShopEase.
            </p>
          </div>

          {/* ===== Quick Links ===== */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* ===== Customer Service ===== */}
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>

          {/* ===== Contact Info ===== */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📍 Kurukshetra, Haryana, India</p>
            <p>📞 +91 2323323323</p>
            <p>✉️ support@example.com</p>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    );
  }
}
