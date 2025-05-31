import Image from "next/image";
import styles from "./header.module.css";
import Link  from "next/link";


export function Header() {
    return (
<div className={styles.header}>
<nav className={styles.nav}>
  <ul>
    <li>
      <Link href="/"> Trang Chủ </Link>
      </li>
    <li>
    <Link href="/"> Sản phẩm</Link>
    </li>
    <li>
    <Link href="/"> Liên Hệ </Link>
    </li>
    <li>
    <Link href="/"> Góp Ý</Link>
    </li>
    <li>
    <Link href="/"> Đăng ký</Link>
    </li>
    <li>
    <Link href="/"> Đăng nhập</Link>
    </li>
  </ul>
</nav>
<div>
    <Image src="/29dfc6f05b80804c18913851a79c5140.jpg" alt="" width={80} height={80}/>
</div>
</div>

    );
}
