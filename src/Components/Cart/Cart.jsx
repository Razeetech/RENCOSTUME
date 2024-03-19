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
                                <div className='py-2'>
                                    <hr />
                                </div>
                            </div>
                            <div className='row p-2 py-3'>
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
                                <div className='border w-25 rounded col'>
                                        
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
                                <div className='py-2'>
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
                                <div className='py-2'>
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
                                <div className='py-2'>
                                    <hr />
                                </div>
                            </div>
                        {/* </div> */}

                    </div>

        </div>
                    
                <div className='container py-4'>
                    <div>
                        <h5>Choose Delivery Channel</h5>
                    </div>
                    <div className='row '>
                        <div className='col-4 mx-4 rounded shadow p-4'>
                            <div className='row'>
                                <div className='col-2'>
                                    <input type="radio" name='deliveryType'  />
                                </div>
                                <div className='col'>
                                    <h6>Delivery</h6>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-2'>
                                    <input type="radio" name='deliveryType'  />
                                </div>
                                <div className='col'>
                                    <h6>Express Delivery</h6>
                                </div>
                            </div>
                            <div className='p-2'>
                                Express Delivery is only available for payment made before 11am in Lagos and Abuja
                            </div>
                        </div>
                        <div className='col-6  rounded-4 shadow'>
                            {/* about to start the form for choosing delivery channel  */}
                            <div className='p-4'>
                                <div className='p-2'>
                                    <input type="text" placeholder='Location' className='form-control' />
                                </div>
                                <div className='p-2'>
                                    <input type="text" placeholder='Amount' className='form-control' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                </div>
            </div>
    </div>
  )
}

export default Cart