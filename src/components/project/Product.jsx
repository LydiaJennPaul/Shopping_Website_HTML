import React, { useState } from 'react'
import localImg1 from '../../assets/images/image1.png'
import localImg2 from '../../assets/images/image2.png'
import localImg3 from '../../assets/images/image3.png'
import localImg4 from '../../assets/images/image4.png'
import localImg5 from '../../assets/images/image5.png'
import localImg6 from '../../assets/images/image6.png'
import localImg7 from '../../assets/images/image7.png'
import localImg8 from '../../assets/images/image8.png'

export const Product = ({cartdatapass, setCartdatapass}) => {
    const [productdetails, setProductdetails]= useState([
        {id:1, brand: 'Claura', name:'Women Fit & Flare Midi Dress', price:724, oldPrice: 2899, discount: '75% OFF', rating: '4.3', reviews: '10.5k', image:localImg1},
        {id:2, brand: 'glitchez', name:'Latest Trendy Western Dress', price:572, oldPrice: 1999, discount: '71% OFF', rating: '3', reviews: '254', image:localImg2},
        {id:3, brand: 'STREET 9', name:'Tiered Fit & Flare Maxi Dress', price:839, oldPrice: 2399, discount: '65% OFF', rating: '4.5', reviews: '966', image:localImg3},
        {id:4, brand: 'Anouk', name:'Floral Print A-Line Maxi Puff', price:892, oldPrice: 2999, discount: '70% OFF', rating: '4.5', reviews: '325', image:localImg4},
        {id:5, brand: 'Claura', name:'Women Fit & Flare Midi Dress', price:724, oldPrice: 2899, discount: '75% OFF', rating: '4.3', reviews: '10.5k', image:localImg5},
        {id:6, brand: 'glitchez', name:'Latest Trendy Western Dress', price:572, oldPrice: 1999, discount: '71% OFF', rating: '3', reviews: '254', image:localImg6},
        {id:7, brand: 'STREET 9', name:'Tiered Fit & Flare Maxi Dress', price:839, oldPrice: 2399, discount: '65% OFF', rating: '4.5', reviews: '966', image:localImg7},
        {id:8, brand: 'Anouk', name:'Floral Print A-Line Maxi Puff', price:892, oldPrice: 2999, discount: '70% OFF', rating: '4.5', reviews: '325', image:localImg8},
    ])

    function addtocart(product){
        console.log(product)
        setCartdatapass([...cartdatapass, product])
    }

  return (

    <div className="product-page">
        {/* Wrap the map in this flex container */}
        <div className="product-list-row">
            {productdetails.map((datas)=>
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


{/* <div>Product
        {productdetails.map((datas)=>
        <div key={datas.id}>
            <h3>{datas.name}</h3>
            <h4>{datas.price}</h4>
            <img src={datas.image} alt={datas.name} width='200px' height='200px'></img>
            <br></br>
            <button onClick={()=>addtocart(datas)}>Add to Cart</button>
        </div>
            )
            })
        
    </div>
  )
} */}
