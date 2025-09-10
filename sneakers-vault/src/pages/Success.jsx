import { Link } from 'react-router-dom';
import styles from '../pages/SuccessCancel.module.css'

export default function Success() {
  return (
    <div className={styles.section}>
        <div className={styles.coverTxt}>
      <h1>✅ Payment Successfull!</h1>
      <p>Thank you for your purchase. We'll send you a confirmation email.</p>
      <Link className={styles.link} to="/">
        Back to homepage
      </Link>
      </div>
    </div>
  );
}
