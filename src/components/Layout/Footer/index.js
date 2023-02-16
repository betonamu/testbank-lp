import classNames from "classnames";

import FacebookIcon from "../../../assets/icons/fb.svg";
import YoutubeIcon from "../../../assets/icons/yt.svg";
import CallIcon from "../../../assets/icons/call.svg";
import MailIcon from "../../../assets/icons/mail.svg";
import LocationIcon from "../../../assets/icons/location.svg";

import styles from "./Footer.module.scss";
import Container from "@/components/Common/Container";

const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <Container>
                <div className={styles.footerTop}>
                    <div className={styles.leftSide}>
                        <img src={"/images/layout/footer-logo.png"} alt=""/>
                        <h3>CÔNG TY TNHH EDUCATION SOFTWARE VIỆT NAM</h3>
                        <p><LocationIcon/>148-150 Nguyễn Đình Chính, Phường 8,<br/> Quận Phú Nhuận, Thành phố Hồ Chí Minh.
                        </p>
                        <p><CallIcon/>(+84) 28 3845 6936</p>
                        <p><MailIcon/>info@dtp-education.com</p>
                    </div>
                    <div className={styles.rightSide}>
                        <p>Xem thêm tại</p>
                        <div className={styles.iconWrapper}>
                        <span className={classNames(styles.icon, styles.facebook)}>
                            <FacebookIcon/>
                        </span>
                            <span className={classNames(styles.icon, styles.youtube)}>
                            <YoutubeIcon/>
                        </span>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    Copyright (c) EDUCATION SOLUTIONS VIET NAM.,LTD. All Rights Reserved
                </div>
            </Container>
        </footer>
    )
}

export default Footer;