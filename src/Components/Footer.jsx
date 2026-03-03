import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light  pb-2 py-5">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>My Clothing Store</h5>
            <p>
              We provide high quality fashion products at affordable prices.
              Shop your favorite styles with us.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#" className="text-light text-decoration-none">T-Shirts</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shoes</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@store.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: India</p>
          </div>

        </div>

        <hr className="bg-light" />

        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} My Clothing Store | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}