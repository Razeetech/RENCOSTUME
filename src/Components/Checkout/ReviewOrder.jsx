import { useState } from 'react';
import styles from '../../Pages/CheckoutPage/Checkout.module.css';
import { FaPencilAlt } from "react-icons/fa";
import { TbCurrencyNaira } from 'react-icons/tb';
import { Item } from './Item';
import { itemsArray } from './Data';
import useStore from '../../../store';


export function formatNumberToCurrency(number) {
    let numStr = number.toString();
    let parts = numStr.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

const ReviewOrder = () => {
    const [deliveryDate, setDeliveryDate] = useState('25/03/2024');
    const [returningDate, setReturningDate] = useState('31/03/2024');
    const { totalCostFn, cart, count } = useStore();
    const totalCost = totalCostFn();
    const itemCount = count();

    return (
        <div className={styles.review}>
            <h3>Review Order</h3>
            <div className={styles.dates}>
                <div>
                    <p>Delivery Date:</p>
                    <p>Returning Date:</p>
                </div>
                <div>
                    <p>{deliveryDate}</p>
                    <p>{returningDate}</p>
                </div>
                <div>
                    <button>
                        <FaPencilAlt size={12} fill='#3d1551' />
                    </button>
                    <button>
                        <FaPencilAlt size={12} fill='#3d1551' />
                    </button>
                </div>
            </div>
            <div className={styles.prices}>
                <div>
                    <p>Delivery</p>
                    <p>Sub Total</p>
                    <p>Tax</p>
                    <p><b>Total</b></p>
                </div>
                <div>
                    <p>
                        <TbCurrencyNaira size={18} />
                        2,000
                    </p>
                    <p>
                        <TbCurrencyNaira size={18} />
                        {formatNumberToCurrency(totalCost)}
                    </p>
                    <p>
                        <TbCurrencyNaira size={18} />
                        0.00
                    </p>
                    <p>
                        <TbCurrencyNaira size={18} />
                        <b>{formatNumberToCurrency(totalCost+2000)}</b>
                    </p>
                </div>
            </div>
            <div className={styles.summary}>
                <div>
                    <p>{itemCount} item{itemCount>1 && 's'}</p>
                    <b>
                        <TbCurrencyNaira size={18} />
                        {formatNumberToCurrency(totalCost+2000)}
                    </b>
                </div>
            </div>
            <div className={styles.items}>
                {/* <Item /> */}
                {/* <hr /> */}
                {
                    cart.map(({image, name, price, quantity, timeinDays, type}, i) => (
                        <Item key={i} image={image} name={name} price={price} quantity={quantity} timeinDays={timeinDays} type={type} />
                    ))
                }
            </div>
        </div>
    )
}

export default ReviewOrder