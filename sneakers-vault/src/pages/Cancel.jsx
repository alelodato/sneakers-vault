import { Link } from 'react-router-dom';
import styles from '../pages/SuccessCancel.module.css'

export default function Cancel() {
  return (
    <div className={styles.section}>
        <div className={styles.coverTxt}>
      <h1>❌ Payment Cancelled</h1>
      <p>Your payment has been cancelled. Try again.</p>
      <Link className={styles.link} to="/checkout">
        Back to checkout
      </Link>
      </div>
    </div>
  );
}
