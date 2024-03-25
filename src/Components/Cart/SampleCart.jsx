/* eslint-disable react/prop-types */
import { TbCurrencyNaira } from 'react-icons/tb';
import styles from '../../Pages/CheckoutPage/Checkout.module.css';
import nefertiti from '../../assets/nefertiti.png';
// You'll have to install a dependency called zustand from npm to use this
import useStore from '../../../store';
import { useEffect } from 'react';

export const CartItem = ({ image, name, type, timeinDays, price, quantity }) => {
// All these should properties of all products we have in the products list
    // {
    //     image: link to image,
    //     name: Name of product,
    //     type: Either 'buy' or 'rent',
    //     timeinDays: How long you're renting for in number not string (3 not '3'),
    //     price: price in number so 30000 not '30000' or '30,000',
    //     quantity: quantity of products you want to add to cart in number. If it's a plus button without a specific number just use 1
    // } 

    const { addToCart, cart, removeFromCart } = useStore();
    // I used zustand to create these properties and functions. Don't worry about the creation.
    // You can find them in the store file in the project root folder though
    // You just have to import useStore from store link in line six
    // cart is the array of all products in the cart.
    // Other two are used to add or remove stuff from the cart

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
    <div className={styles.item}>
        <img src={image || nefertiti} alt="" />
        <div>
            <h4>{name || 'Nefertiti Woven Crown'}</h4>
            <p>
                {type || 'Rent'}
                <b>
                    ({quantity || 2} quantities)
                </b>
            </p>
            <p>{timeinDays || 3} Days</p>
            <h3>
                <TbCurrencyNaira size={18} />
                {price || "20,000"}
            </h3>
        </div>
            <button onClick={() => addToCart({image: nefertiti, name: 'Nefertiti Woven Crown', type: 'Rent', timeinDays: 2, price: 10000, quantity: 1 })}>+</button>
            {/* Here we're using the function to add to cart. Try to use these parameters in the order that they are here. */}
            <button onClick={() => removeFromCart('Nefertiti Woven Crown')}>-</button>
            {/* Here we're using the function to remove from cart. For this you just need the name of the product */}
    </div>
  )
}
