import React from 'react'
import '../compo-css/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {

 

  const totalPrice = cartItems.reduce((price,item)=>price + item.price * item.quantity,0)

 
 
  
  return (
    <div>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Cart</li>
          </ol>
        </nav>
      </div>

      {cartItems.length === 0 &&
        <div className="cart-items-empty">
           <p>No-items are added into cart(cart is empty)</p>
        </div>
      }

      <div className="cart-container">
        <table className="table cart">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">price</th>
              <th scope="col">Quantity</th>
           
          
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, id) => {
              return (

                <tr key={id}>

                  <td>
                    <img src={item.image} alt="proimage" />
                    <td className="pro-name">{item.name}</td>
                  </td>
                 
                  <td>
                    <div className="price">
                      Rs.{item.price}
                    </div>
                  </td>

                  <td>
                    <div className="quantity">
                      <FontAwesomeIcon icon={faMinus} className="minus" onClick={() => handleRemoveProduct(item)} />
                      <input type="text" placeholder={item.quantity} />
                      <FontAwesomeIcon icon={faPlus} className="plus" onClick={() => handleAddProduct(item)} />
                    </div>
                  </td>

                

               
                </tr>
              )
            })

            }
          </tbody>
        </table>

        <div className="cart-total">
          <h3>Cart totals</h3>
          <div className="sub-totals">
              <h5 className="name">subtotal</h5>
              <h5 className="value">Rs.{totalPrice}</h5>
          </div>
          <div className="totals">
              <h4 className="name">Total</h4>
              <h4 className="value">Rs.{totalPrice}</h4>
          </div>
          
         <button className="btn btn-dark" id="check">PROCEED TO CHECKOUT</button>
         
        </div>
      </div>

    </div>
  )
}

export default Cart