import React from "react";
import Container from "@/components/Common/Container";

import Icon from "../../assets/icons/double.svg";

import styles from "./CustomerReview.module.scss";
import {Desktop} from "@/components/Common/Media";

const CustomerReview = () => {
    return (
        <Container className={styles.background}>
            <div className={styles.customerReviewWrapper}>
                <h2>Khách hàng nói gì<br/> về chúng tôi</h2>

                <div className={styles.content}>
                    <div className={styles.reviewContent}>
                        <Icon/>
                        <p>
                            Hello Arthur! How are you?! So, I don't remember ecxactly, but I'm not sure that we saw this
                            on that meting. I'm missing some ideais at this moment, but I'm not so sure about that. So,
                            can you check this content, please?
                        </p>
                        <div className={styles.currentAvatar}>
                            <img src={"/images/home/customer-service/image-avt.png"} alt={""}/>
                            <p className={styles.name}>Jane Cooper</p>
                            <p>President of Sales</p>
                        </div>
                    </div>
                    <Desktop>
                        <img className={styles.review1} src={"/images/home/customer-service/image-avt.png"} alt={""}/>
                        <img className={styles.review2} src={"/images/home/customer-service/image-avt.png"} alt={""}/>
                        <img className={styles.review3} src={"/images/home/customer-service/image-avt.png"} alt={""}/>
                        <img className={styles.review4} src={"/images/home/customer-service/image-avt.png"} alt={""}/>
                        <img className={styles.review5} src={"/images/home/customer-service/image-avt.png"} alt={""}/>
                        <img className={styles.review6} src={"/images/home/customer-service/image-avt.png"} alt={""}/>
                    </Desktop>
                </div>
            </div>
        </Container>
    )
}

export default CustomerReview;