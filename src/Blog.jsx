import React from "react";

export default function Blog() {
  return (
    <div>

      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">About Our Store</h1>
          <p className="lead">
            We provide the best fashion products with premium quality.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="container py-5">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
              className="img-fluid rounded shadow"
              alt="about"
            />
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <h2>Who We Are</h2>
            <p>
              We are a modern clothing brand delivering stylish and
              comfortable outfits for men and women. Our mission is to make
              fashion affordable and accessible for everyone.
            </p>

            <h4>Why Choose Us?</h4>
            <ul>
              <li>High Quality Products</li>
              <li>Affordable Price</li>
              <li>Fast Delivery</li>
              <li>Secure Payment</li>
            </ul>

            <button className="btn btn-dark mt-3">
              Explore Products
            </button>
          </div>

        </div>
      </div>

      {/* Team Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Team</h2>

          <div className="row">
            <div className="col-md-4">
              <div className="card shadow border-0">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  className="card-img-top"
                  alt="team"
                />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-md-0">
              <div className="card shadow border-0">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                  className="card-img-top"
                  alt="team"
                />
                <div className="card-body">
                  <h5 className="card-title">Sara Smith</h5>
                  <p className="card-text">Marketing Head</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-md-0">
              <div className="card shadow border-0">
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                  className="card-img-top"
                  alt="team"
                />
                <div className="card-body">
                  <h5 className="card-title">David Lee</h5>
                  <p className="card-text">Product Manager</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}