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
                            là nền tảng quản lý đề thi trực tuyến phục vụ đa đối tượng (giáo viên, học viên, phụ
                            huynh & nhà trường), dễ sử dụng, nội dung bám sát chương trình học chính khóa với đầy đủ các
                            dạng thức theo chuẩn trong nước và quốc tế.
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