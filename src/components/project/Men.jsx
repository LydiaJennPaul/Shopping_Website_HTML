import React, { useState } from 'react'
import LocalImg1 from '../../assets/images/men1.png'
import LocalImg2 from '../../assets/images/men2.png'
import LocalImg3 from '../../assets/images/men3.png'
import LocalImg4 from '../../assets/images/men4.png'
import LocalImg5 from '../../assets/images/men5.png'
import LocalImg6 from '../../assets/images/men6.png'
import LocalImg7 from '../../assets/images/men7.png'
import LocalImg8 from '../../assets/images/men8.png'





export const Men = ({cartdatapass, setCartdatapass}) => {
    const [mendetails, setMendetails]= useState([
        {id:1, brand: 'Roadster', name:'Men', price:724, oldPrice: 2899, discount: '75% OFF', rating: '4.3', reviews: '10.5k', image: LocalImg1},
        {id:2, brand: 'HRX', name:'Men', price:572, oldPrice: 1999, discount: '71% OFF', rating: '3', reviews: '254', image: LocalImg2},
        {id:3, brand: 'Puma', name:'Men', price:839, oldPrice: 2399, discount: '65% OFF', rating: '4.5', reviews: '966', image: LocalImg3},
        {id:4, brand: 'Adidas', name:'Men', price:892, oldPrice: 2999, discount: '70% OFF', rating: '4.5', reviews: '325', image: LocalImg4},
        {id:5, brand: 'Roadster', name:'Men ', price:724, oldPrice: 2899, discount: '75% OFF', rating: '4.3', reviews: '10.5k', image: LocalImg5},
        {id:6, brand: 'HRX', name:'Men', price:572, oldPrice: 1999, discount: '71% OFF', rating: '3', reviews: '254', image: LocalImg6},
        {id:7, brand: 'Puma', name:'Men', price:839, oldPrice: 2399, discount: '65% OFF', rating: '4.5', reviews: '966', image: LocalImg7},
        {id:8, brand: 'Adidas', name:'Men', price:892, oldPrice: 2999, discount: '70% OFF', rating: '4.5', reviews: '325', image: LocalImg8},
    ])


    function addtocart(men){
        console.log(men)
        setCartdatapass([...cartdatapass, men])
    }




return (

    
    <div className="product-page">
        {/* Wrap the map in this flex container */}
        <div className="product-list-row">
            {mendetails.map((datas)=>
                <div key={datas.id} className="item-card">
                    <img src={datas.image} alt={datas.name} className="item-image" />
                    <div className="item-info">
                        <h3 className="brand-title">{datas.brand}</h3>
                        <p className="item-name">{datas.name}</p>
                        <h4 className="item-price">Rs. {datas.price}</h4>
                        <button className="cart-button" onClick={()=>addtocart(datas)}>Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
















//     <div className="product-page">
//       <h1 style={{paddingLeft: '20px', textTransform: 'uppercase', fontSize: '20px', color: '#282c3f'}}>Men's Collection</h1>
      
//       <div className="product-list-row">
//         {mendetails.map((datas) => (
//           <div key={datas.id} className="item-card">
//             <div className="img-container">
//               <img src={datas.image} alt={datas.name} className="item-image" />
//               <div className="rating-badge">
//                 {datas.rating} <span>★</span> | {datas.reviews}
//               </div>
//             </div>
            
//             <div className="item-info">
//               <h3 className="brand-title">{datas.brand}</h3>
//               <p className="item-name">{datas.name}</p>
              
//               <div className="price-box">
//                 <span className="current-price">Rs. {datas.price}</span>
//                 <span className="old-price">Rs. {datas.oldPrice}</span>
//                 <span className="discount-percent">({datas.discount})</span>
//               </div>
              
//               <button className="cart-button" onClick={() => addtocart(datas)}>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }