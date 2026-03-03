import React, { useState } from 'react'

export default function Products() {

  const products = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    productName: "Men Casual Shirt",
    shortDescription: "Comfortable cotton casual shirt for men."
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    productName: "Women Summer Dress",
    shortDescription: "Lightweight floral summer dress."
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
    productName: "Denim Jacket",
    shortDescription: "Stylish blue denim jacket for all seasons."
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
    productName: "Kids Hoodie",
    shortDescription: "Warm and soft hoodie for kids."
  }
];

  const tshirts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1002644/pexels-photo-1002644.jpeg",
    productName: "Classic White T-Shirt",
    shortDescription: "Soft cotton white t-shirt for everyday comfort."
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/6311606/pexels-photo-6311606.jpeg",
    productName: "Black Graphic T-Shirt",
    shortDescription: "Trendy black t-shirt with modern graphic print."
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    productName: "Oversized Street T-Shirt",
    shortDescription: "Comfortable oversized street-style t-shirt."
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
    productName: "Sports Performance T-Shirt",
    shortDescription: "Breathable and lightweight sports t-shirt."
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
    productName: "Striped Casual T-Shirt",
    shortDescription: "Stylish striped t-shirt for casual outings."
  }
];
const shoes = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    productName: "Running Shoes",
    shortDescription: "Lightweight and comfortable running shoes.",
    price: 1999,
    category: "Shoes"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    productName: "Casual Sneakers",
    shortDescription: "Stylish sneakers for everyday wear.",
    price: 2499,
    category: "Shoes"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
    productName: "Formal Leather Shoes",
    shortDescription: "Premium leather shoes for formal occasions.",
    price: 3499,
    category: "Shoes"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg",
    productName: "Sports Training Shoes",
    shortDescription: "Durable training shoes for gym and sports.",
    price: 2799,
    category: "Shoes"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg",
    productName: "Canvas Shoes",
    shortDescription: "Comfortable canvas shoes with modern design.",
    price: 1499,
    category: "Shoes"
  }
];
const Ornaments=[{
    id: 1,
    image: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg",
    productName: "Gold Necklace",
    shortDescription: "Elegant gold necklace for special occasions.",
    price: 15999,
    category: "Ornaments"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
    productName: "Diamond Ring",
    shortDescription: "Beautiful diamond ring with premium finish.",
    price: 25999,
    category: "Ornaments"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg",
    productName: "Silver Bracelet",
    shortDescription: "Stylish silver bracelet for daily wear.",
    price: 4999,
    category: "Ornaments"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/942878/pexels-photo-942878.jpeg",
    productName: "Pearl Earrings",
    shortDescription: "Classic pearl earrings for elegant look.",
    price: 6999,
    category: "Ornaments"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg",
    productName: "Traditional Bangles",
    shortDescription: "Beautiful traditional bangles set.",
    price: 8999,
    category: "Ornaments"
  }

]
  const [data, setData] = useState([...Ornaments,...shoes]);

  return (
    <div id='Products'>
      <div className="container mt-5">

        <nav className="navbar bg-warning">
          <form className="container-fluid justify-content-start">

            <button 
              type="button"
              className="btn btn-outline-success me-2"
              onClick={() => setData(products)}
            >
              All
            </button>

            <button 
              type="button"
              className="btn btn-outline-success me-2"
              onClick={() => setData(tshirts)}
            >
              T-Shirt
            </button>

            <button 
              type="button"
              className="btn btn-outline-success me-2"
              onClick={()=> setData(shoes)}
            >
              Shoes
            </button>
            <button 
              type="button"
              className="btn btn-outline-success me-2"
              onClick={()=> setData(Ornaments)}
            >
              Ornaments
            </button>

          </form>
        </nav>

        <div className="row">
          {data.map((items) => (
            <div className="col-md-4 p-4" key={items.id}>
              <div className="card p-2">
                <img 
                  src={items.image}
                  className="card-img-top img-thumbnail"
                  alt={items.productName}
                />
                <div className="card-body">
                  <h3 className="card-title">{items.productName}</h3>
                  <p className="card-text">{items.shortDescription}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}