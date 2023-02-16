import React from "react";
import classNames from "classnames";

import Button from "@/components/Common/Controls/Button";

import styles from "./Banner.module.scss";
import Container from "@/components/Common/Container";

const Banner = () => {
    return (
        <div className={styles.background}>
            <Container>
                <div className={classNames(styles.bannerWrapper)} id={"referral"}>
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
            </Container>
        </div>
    )
}

export default Banner;