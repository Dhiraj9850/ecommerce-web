import React, { useState} from 'react'
import '../compo-css/Products.css';
import '../compo-css/Header.css';
import Data from '../data/data';
import { Link } from 'react-router-dom';

const Products = ({handleAddProduct}) => {

    const [category, setCategory] = useState(Data);
    const [search, setSearch] = useState('');


    const filterCategory = (catItem) => {
        const result = Data.filter((curData) => {
            return curData.category === catItem;
        });
        setCategory(result);
       
    }

    const searchProducts = category.filter(name=>{
        return name.name.toLowerCase().includes(search.toLowerCase())
    })
 
    
   

    return (
        <div>
            <div className="Header fixed-top">
                <div className="dropdown one">
                    <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </button>
                    <ul className="dropdown-menu">
                        <button className="btn btn-light" onClick={() => filterCategory('hoodies')}>Hoodies</button>
                        <button className="btn btn-light" onClick={() => filterCategory('Tshirts')}>TShirts</button>
                        <button className="btn btn-light" onClick={() => filterCategory('shirts')} >Shirts</button>
                        <button className="btn btn-light" onClick={()=>setCategory(Data)} >All</button>
                    </ul>
                </div>
                <div className="dropdown two">
                    <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Size
                    </button>
                    <ul className="dropdown-menu">
                        <button className="btn btn-light">S</button>
                        <button className="btn btn-light">M</button>
                        <button className="btn btn-light">L</button>
                        <button className="btn btn-light">XL</button>
                    </ul>
                </div>

                <div className="search">
                    <input type="search" name="search" id="search" placeholder=" Search" value={search} onChange={e=>setSearch(e.target.value)} />
                </div>

                <div className="add-cart">
                  
                        <Link to="/Cart" className="btn btn-primary">
                            Add to cart
                        </Link>

                   
                </div>
            </div>
<hr />   
            

            <div className="productItems">
          
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Color</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Price</th>
                            <th scope="col" className="th-buy">Buy</th>

                        </tr>

                    </thead>
                    <tbody>

                        {searchProducts.map((values, id) => {
                            const { image, name, color, price } = values
                            return (
                                <tr key={id}>
                                    <td className="image">
                                        <img src={image} alt="" />
                                    </td>
                            
                                     <td >{name}</td>                             
                                     <td>{color}</td>
                                     <td>in stock</td>
                                     <td >Rs.{price}</td>
                               
                                   
                                    <td>
                                        <div className="buy">
                                            <i className="bi bi-cart-plus" onClick={()=>handleAddProduct(values)}></i>
                                        </div>

                                    </td>
                                </tr>
                            )


                        })
                        }



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products;