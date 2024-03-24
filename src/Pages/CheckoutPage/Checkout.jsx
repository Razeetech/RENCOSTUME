import { useState } from "react";
import styles from './Checkout.module.css';
import Guest from "../../Components/Checkout/Guest";
import SignIn from "../../Components/Checkout/SignIn";
import Create from "../../Components/Checkout/Create";
import paystack from '../../assets/paystack.svg';
import { TbCurrencyNaira } from "react-icons/tb";
import ReviewOrder from "../../Components/Checkout/ReviewOrder";

const tabs = [
  {
    title: 'Guest Checkout',
    content: <Guest />
  },
  {
    title: 'Sign In',
    content: <SignIn />
  },
  {
    title: 'Create An Account',
    content: <Create />
  }
];

const Checkout = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [accountNum, setAccountNum] = useState('2222222222');
    const [accountName, setAccountName] = useState('Paystack Titans');

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    return (
      <div className={styles.wrapper}>
        <h1>Checkout</h1>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <div
              key={index}
             
              className={styles.tab}
              onClick={() => handleTabClick(index)}
            >
                <p>{tab.title}</p>
            </div>
          ))}
          <div className={styles.highlight} style={{ left: `${activeTab * 33}%` }} />
        </div>
        <div className={styles.tabContentContainer} style={{ left: `(${600 * activeTab})px` }}>
          {tabs.map((tab, i) => (
            <div
              key={i}
              className={styles.tabContent}
              style={{ transform: `translateX(${-100 * activeTab}%)` }}
            >
              {tab.content}
            </div>
          ))}
        </div>
        <main className={styles.main} style={{ top: `${activeTab == 0 ? '-340' : activeTab == 1 ? '-290' : '-20'}px`, marginBottom: `${activeTab == 0 ? '-300' : activeTab == 1 ? '-260' : '0'}px` }}>
          <aside>
            <h3>Payment Details</h3>
            <div>
              <img src={paystack} alt="" />
              <p className={styles.email}>johndoe@gmail.com</p>
              <p className={styles.price}>
                <TbCurrencyNaira size={18} />
                120,000
              </p>
              <div>
                <p>
                  Account Number
                  <span>(Valid for only 30 minutes)</span>
                </p>
                <h5>{accountNum}</h5>
              </div>
              <div>
                <p>Bank Name</p>
                <h5>{accountName}</h5>
              </div>
              <button>
                Make Payment
              </button>
              <p className={styles.info}>Bookings will be shown successful when payment has been received</p>
            </div>
          </aside>
          <ReviewOrder />
        </main>
      </div>
    );
}

export default Checkout