/* eslint-disable react/prop-types */
import { TbCurrencyNaira } from 'react-icons/tb';
import styles from '../../Pages/CheckoutPage/Checkout.module.css';
import nefertiti from '../../assets/nefertiti.png';

export const Item = ({ image, name, type, timeinDays, price, quantity }) => {
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
    </div>
  )
}
