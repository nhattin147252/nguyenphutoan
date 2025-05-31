'use client'

import { useEffect, useState } from "react";
import styles from "./chitietsanpham.module.css";
import SimpleSlider from "../components/slider/slider";
import KmSlider from "../components/slider/kmslider";
import Link from "next/link";

export default function ChiTietSanPham() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    setHtmlContent(`
      <div class="${styles.productDetail}">
        <h1>Giày Sneaker Nam Thể Thao – Năng Động & Phong Cách</h1>
        <p><strong>Giày sneaker nam</strong> là lựa chọn lý tưởng cho các hoạt động hằng ngày, thể thao, đi học hoặc đi chơi.</p>

        <h2>1. Đặc điểm nổi bật của giày sneaker</h2>
        <ul>
          <li>Thiết kế trẻ trung, dễ phối đồ với nhiều phong cách.</li>
          <li>Chất liệu vải canvas thoáng khí, đế cao su chống trượt hiệu quả.</li>
          <li>Phù hợp cho cả đi học, đi làm và dạo phố.</li>
        </ul>

        <h2>2. Hình ảnh sản phẩm</h2>
        <p style="text-align: center;">
          <img src="/giaynike.jpg" alt="Giày sneaker nam" class="${styles.productImage}" />
        </p>

        <h3>2.1 Kích thước & màu sắc</h3>
        <p>Kích thước: Size 38 – 43. Màu sắc: Trắng, Đen, Xám, Xanh Navy.</p>

        <h3>2.2 Chất liệu</h3>
        <p>Vải canvas cao cấp kết hợp đế cao su nguyên khối, tạo cảm giác êm chân khi di chuyển.</p>

        <h2>3. Thông tin liên hệ mua hàng</h2>
        <ul>
          <li><strong>Hotline:</strong> 1900 5678</li>
          <li><strong>Website:</strong> <a href="https://giaydepvn.com" target="_blank" rel="noopener noreferrer">giaydepvn.com</a></li>
          <li><strong>Facebook:</strong> <a href="https://facebook.com/giaydepvn" target="_blank" rel="noopener noreferrer">facebook.com/giaydepvn</a></li>
        </ul>
      </div>
    `);
  }, []);

  return (
    <div className={styles.chitietsanpham}>
      <div className={styles.mainContent}>
        <div className={styles.gioithieu}>
          <div className={styles.hinhanh}>
            <div className={styles.slider}>
              <SimpleSlider />
            </div>
          </div>

          <div className={styles.gia}>
            <div className={styles.giaban}>
              <p>750.000đ <span className={styles.giacu}>1.200.000đ</span></p>
            </div>

            <div className={styles.khuyenmai}>
              <div className={styles.kmslider}>
                <KmSlider />
              </div>
            </div>

            <div className={styles.muangay}>
              <div className={styles.nutmua}>
                <Link href="/giohang">Mua ngay</Link>
                <span className={styles.giaohang}>Miễn phí vận chuyển toàn quốc</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mota}>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
      </div>
    </div>
  );
}

