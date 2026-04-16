import React from 'react'

export const Cart = ({cartdatapass, setCartdatapass}) => {
    console.log("cartdatapass",cartdatapass);
function removeitem(item){
    console.log("id",item);
    const removeitem = cartdatapass.filter((datas)=>datas.id !== item.id)
    setCartdatapass(removeitem);
}





  return (

    <div className="cart-container">
        <h2 className="cart-header">Shopping Bag ({cartdatapass.length} Items)</h2>
        <div className="cart-list">
            {cartdatapass.map((particularitem)=>
                <div key={particularitem.id} className="cart-item-row">
                    <div className="cart-img-box">
                        <img src={particularitem.image} alt={particularitem.name} className="cart-image" />
                    </div>
                    <div className="cart-details">
                        <h3 className="cart-brand">Anouk</h3>
                        <p className="cart-item-name">{particularitem.name}</p>
                        <h4 className="cart-item-price">Rs. {particularitem.price}</h4>
                        <button className="myntra-remove-btn" onClick={()=>removeitem(particularitem)}>
                            REMOVE
                        </button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}






//     <div>
//         {cartdatapass.map((particularitem)=>
//         <div>
//             <h3>{particularitem.name}</h3>
//             <h4>{particularitem.price}</h4>
//             <img src={particularitem.image} alt={particularitem.name} width='200px' height='200px'></img>
//             <button onClick={()=>removeitem(particularitem)}>Remove from Cart</button>
//         </div>
//             )
//             }
//     </div>
//   )
// }
