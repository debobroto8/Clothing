import React from 'react'

export default function Shop() {

  const products = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      name: "Men Casual Shirt",
      price: "$25"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
      name: "Women Fashion Dress",
      price: "$45"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
      name: "Stylish Jacket",
      price: "$60"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      name: "Classic T-Shirt",
      price: "$20"
    }
  ]

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Shop</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.name}
                style={{height: "250px", objectFit: "cover"}}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text fw-bold text-success">
                  {product.price}
                </p>
                <button className="btn btn-dark w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}