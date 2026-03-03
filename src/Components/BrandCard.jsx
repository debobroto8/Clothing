import React from 'react'

export default function BrandCard() {
    const brandCard=[
        {
            id:1,
            title:"Free Shipping",
            text:"On All Orders Draw $99",
        },
          {
            id:2,
            title:"Secure Paymanet",
            text:"We ensure secure payment",
        },
          {
            id:3,
            title:"Free Shipping",
            text:"30 Days Return Policy",
        },
          {
            id:4,
            title:"Online Support",
            text:"24/7 Dedicated Support",
        }
    ]
        
    
  return (
    <div className='my-5'>
      <div className="container">
        <div className="row">
            {brandCard.map((i) => (
               <div className="col-md-3" key={i.id}>
<div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">{i.title}</h5>
    <p className="card-text">{i.text}</p>
    <a href="#" className="btn btn-primary">More</a>
  </div>
</div>
           </div>

        ))
        }
        </div>
      </div>
      
    </div>
  )
}
