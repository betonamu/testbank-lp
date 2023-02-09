import React from "react";
import classNames from "classnames";

import Button from "@/components/Common/Controls/Button";

import Logo from "../../../assets/icons/logo.svg";

import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={classNames(styles.header, "container")}>
            <div className={styles.leftSide}>
                <Logo/>
                <a className={styles.navItem}>Giới thiệu</a>
                <a className={styles.navItem}>Bảng giá</a>
                <a className={styles.navItem}>Tính năng</a>
                <a className={styles.navItem}>Liên hệ</a>
            </div>
            <div className={styles.rightSide}>
                <select>
                    <option>123</option>
                    <option>123</option>
                </select>
                <Button className={styles.btnLogin} type="outline">Đăng nhập</Button>
                <Button className={styles.btnTrial} type="primary">Dùng thử miễn phí</Button>
            </div>
        </header>
    )
}

export default Header;