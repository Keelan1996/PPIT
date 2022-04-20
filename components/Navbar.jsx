import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

// Navagation bar format at the top, can click homepage and cart symbol
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
       
        <div className={styles.texts}>
          <div className={styles.text}>Call Us!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}></li>
          <Image src="/img/game8.png" alt="" width="120px" height="70px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div> 
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;

