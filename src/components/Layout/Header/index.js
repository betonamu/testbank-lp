import React from "react";
import classNames from "classnames";

import Button from "@/components/Common/Controls/Button";
import {Desktop, Mobile} from "@/components/Common/Media";

import Logo from "../../../assets/icons/logo.svg";
import LogoMobile from "../../../assets/icons/logo-mobile.svg";
import MenuIcon from "../../../assets/icons/menu.svg";
import VietNamFlag from "../../../assets/icons/vn-flag.svg";
import Chevron from "../../../assets/icons/chevron-down.svg";

import styles from "./Header.module.scss";
import useDevices from "@/hooks/useDevices";

const Header = () => {
    const {isDesktop} = useDevices();

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        // const scrollPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        element.style.scrollMargin = isDesktop ? '92px' : '64px';
        element.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <header className={classNames(styles.header, 'container')}>
            <Desktop>
                <div className={styles.leftSide}>
                    <Logo/>
                    <a className={styles.navItem}
                       onClick={() => scrollToElement('referral')}>
                        Giới thiệu
                    </a>
                    <a className={styles.navItem}
                       onClick={() => scrollToElement('pricing')}>
                        Bảng giá
                    </a>
                    <a className={styles.navItem}
                       onClick={() => scrollToElement('feature')}>
                        Tính năng
                    </a>
                    <a className={styles.navItem}
                       onClick={() => scrollToElement('contact')}>
                        Liên hệ
                    </a>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.languageGr}>
                        <VietNamFlag/>
                        <Chevron/>
                    </div>
                    <Button className={styles.btnLogin}
                            type="outline">
                        Đăng nhập
                    </Button>
                    <Button className={styles.btnTrial}
                            type="primary">
                        Dùng thử miễn phí
                    </Button>
                </div>
            </Desktop>
            <Mobile>
                <LogoMobile/>
                <MenuIcon/>
            </Mobile>
        </header>
    )
}

export default Header;