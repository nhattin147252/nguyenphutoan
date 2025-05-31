import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";

export default function Product() {
  return (
    <div className={styles.product}>
      <Link href="/chitietsanpham">
        <div className={styles.mainProduct}>
          <div className={styles.hinh}>
            <img
              src="/giaynike.jpg"
              alt="Giày Sneaker Nam"
              layout="responsive"
              width={180}
              height={220}
            />
          </div>
          <div className={styles.ten}>
            <h5>Giày Sneaker Nam</h5>
          </div>
          <div className={styles.gia}>
            <strong className={styles.price}>750.000đ</strong>
            <span className={styles.discount}>
              <label className={styles.oldPrice}>1.200.000đ</label>
              <small>-37%</small>
            </span>
          </div>
          <div className={styles.conlai}>
            <Image
              src="/flash-sale.png"
              alt="Flash Sale"
              width={25}
              height={25}
            />
            <span>còn 450/2000 suất</span>
          </div>
        </div>
      </Link>
      <div className={styles.buyButton}>
        <Link href="/giohang">Mua Ngay</Link>
      </div>
    </div>
    
  );
}
