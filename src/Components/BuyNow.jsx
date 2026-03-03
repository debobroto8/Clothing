import React, { useState } from 'react'

export default function BuyNow() {

  const product = {
    name: "Men Casual Shirt",
    price: 25,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
  }

  const [quantity, setQuantity] = useState(1)

  const totalPrice = product.price * quantity

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Buy Now</h2>

      <div className="row">
        
        {/* Product Section */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <img 
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{height:"300px", objectFit:"cover"}}
            />
            <div className="card-body">
              <h5>{product.name}</h5>
              <p className="fw-bold text-success">${product.price}</p>

              <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input 
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e)=>setQuantity(e.target.value)}
                  className="form-control"
                />
              </div>

              <h5>Total: <span className="text-danger">${totalPrice}</span></h5>
            </div>
          </div>
        </div>

        {/* Customer Form Section */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">

            <h5 className="mb-3">Customer Details</h5>

            <form>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea className="form-control" rows="3" required></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Payment Method</label>
                <select className="form-select">
                  <option>Cash on Delivery</option>
                  <option>Credit Card</option>
                  <option>UPI</option>
                </select>
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Place Order
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  )
}