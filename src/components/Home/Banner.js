import React from "react";
import styles from "./Banner.module.scss";
import Button from "@/components/Common/Controls/Button";
import classNames from "classnames";

const Banner = () => {
    return (
        <div className={classNames(styles.bannerWrapper, "container")}>
            <div className={styles.bannerLeft}>
                <h1 className={styles.title}>
                    Giải pháp quản lý<br/>
                    <span>đề thi</span> trực tuyến
                </h1>
                <p className={styles.description}>
                    <span>i-test</span>&nbsp;
                    là nền tảng quản lý đề thi trực tuyến đa vai trò (giáo viên, học viên, phụ huynh & nhà trường)
                    và dễ dàng sử dụng cùng với nội dung bám sát chương trình học chính khóa và theo chuẩn DOET &
                    Cambridge
                </p>
                <Button className={styles.btnSignUp} type="primary">Đăng ký</Button>
            </div>
            <div className={styles.bannerRight}>
                <img src={"/images/home/banner/img-right.png"} alt={""}/>
            </div>
        </div>
    )
}

export default Banner;