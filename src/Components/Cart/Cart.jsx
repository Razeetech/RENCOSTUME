import React, { useState } from 'react'
import './Cart.css'

const Cart = (cartlist) => {
    // const [first, setfirst] = useState(second)


  return (
    <div>
        <div className="container mx-auto my-4 border-0 rounded  p-2">
            <div className='container shadow row'>
                <div className=" bg-white border-2 p-2 mx-2 col">
                    <div className="  p-2">
                        <h4 className="shopping-cart-text ">Cart</h4>
                        {/* <div className='row'> */}
                            <div className='row py-4'>
                                <div className='col'>
                                    Product
                                    
                                </div>
                                <div className='col'>
                                    Rent
                                    
                                </div>
                                <div className='col'>
                                    Quantity
                                    
                                </div>
                                <div className='col'>
                                    Days
                                    
                                </div>
                                <div className='col'>
                                    Price/Day
                                    
                                </div>
                                <div className='col'>
                                    Subtotal
                                    
                                </div>
                                <div>
                                    <hr />
                                </div>
                            </div>
                            <div className='row p-2'>
                                <div className='col'>
                                        <img src="#" alt="Product" /> 
                                </div>
                                <div className='col'>
                                    <div className='row'>
                                            <div className='col'>
                                                <input type="checkbox" />
                                            </div>
                                            <div className='col'>
                                                <input type="checkbox" />
                                            </div>
                                    </div>
                                </div>
                                <div className='border w-50 rounded col'>
                                        
                                    <h6 className='num p-2'>
                                        <i class="material-symbols-outlined Q-icon">
                                            add
                                        </i>
                                            2 
                                        <i class="material-symbols-outlined Q-icon">remove</i>
                                    </h6>

                                </div>
                                <div className='col'>2</div>
                                <div className='col'>#5,000</div>
                                <div className='col'>#20,000</div>
                            </div>
                        {/* </div> */}
                        {/* <div className='p-2 m-2'>
                            <h4 className="shopping-cart-text ">Cart</h4>

                            <hr />
                        </div>
                        <div>
                            <div className='row p-2'>
                                <div className="col-4">
                                    <img src="" alt="product" className="img-fluid" />
                                </div>
                                <div className="col-8">
                                    <input type="checkbox" />
                                    <input type="checkbox" />

                                </div>
                            </div>
                            <div className='row p-2'>
                                <div className="col-4">
                                    <img src="" alt="product" className="img-fluid" />
                                </div>
                                <div className="col-8">
                                    <h6>Product Name</h6>
                                    <h6>US $99.32</h6>
                                    <h6>Qty: 1</h6>
                                    <button className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
        </div>
                    

                </div>

            </div>
    </div>
  )
}

export default Cart