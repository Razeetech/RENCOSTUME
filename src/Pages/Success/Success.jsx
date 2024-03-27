import styles from './Success.module.css';
import logo from '../../assets/Logo-small.svg';
import { FaCheckCircle } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const Success = () => {
  return (
    <div className={styles.wrapper}>
        <section>
            <img src={logo} width={120} height={120} alt="" />
            <FaCheckCircle fill='#3d1551' size={60} />
            <h4>ORDER SUCCESSFULLY COMPLETED!</h4>
            <div>
                <BsInfoCircle size={24} />
                <p>
                    A notification will be sent when your order has been picked and you can also track your order from the navigation bar.
                </p>

            </div>
            <button>Back to Home Page</button>
        </section>
    </div>
  )
}

export default Success