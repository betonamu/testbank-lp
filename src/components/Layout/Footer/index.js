import styles from "./Footer.module.scss";
import classNames from "classnames";

const Footer = () => {
    return (
        <div className={classNames(styles.footerWrapper, "container")}>
            <div className={styles.footerTop}>
                <div className={styles.leftSide}>
                    <img src={"/images/layout/footer-logo.png"} alt=""/>
                    <h3>CÔNG TY TNHH EDUCATION SOLUTION VIỆT NAM</h3>
                    <p>148-150 Nguyễn Đình Chính, Phường 8, Quận Phú Nhuận, Thành phố Hồ Chí Minh.</p>
                    <p>(+84) 28 3845 6936</p>
                    <p>info@dtp-education.com</p>
                </div>
                <div className={styles.rightSide}>
                    <p>Xem thêm tại</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                Copyright (c) EDUCATION SOLUTIONS VIET NAM.,LTD. All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;