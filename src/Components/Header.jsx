import React from "react";

export default function Header() {
  return (
    <section>
             <nav className="bg-danger text-white py-3">
      <div className="container">
        <div className="row">
          
          <div className="col-md-6 d-flex  align-items-center">
            <p className="mb-0"> support@gmail.com </p>
            
            <p className="mb-0">+91737847847</p>
          </div>

          <div className="col-md-6 d-flex justify-content-end align-items-center">
            <p className="mb-0 me-3">Welcome to Our Store</p>
            <select>
              <option>English</option>
              <option>Bangla</option>
              <option>Hindi</option>
            </select>
            <p className="mb-0 mx-3">Currency:</p>
            <select>
              <option>Bdt</option>
              <option>Rupees</option>
              <option>Dollar</option>
            </select>
          
          </div>

        </div>
      </div>
    </nav>
    </section>
   
  );
}