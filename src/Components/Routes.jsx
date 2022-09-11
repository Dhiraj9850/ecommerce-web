import React from 'react'
import { Switch,Route } from 'react-router-dom';
import Products from '../Components/Products';
import Cart from './Cart';

const Routes = ({handleAddProduct,handleRemoveProduct,cartItems}) => {
  return (
    <div>
        <Switch>
            <Route exact path="/">
               <Products handleAddProduct={handleAddProduct}/>
            </Route>
            <Route exact path="/cart">
               <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
            </Route>
           
        </Switch>
    </div>
  )
}

export default Routes