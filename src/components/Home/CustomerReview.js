import React, {useState} from "react";
import Container from "@/components/Common/Container";

import Icon from "../../assets/icons/double.svg";

import styles from "./CustomerReview.module.scss";
import {Desktop, Mobile} from "@/components/Common/Media";
import CustomCarousel from "@/components/Common/CustomCarousel";
import classNames from "classnames";
import useDevices from "@/hooks/useDevices";
import {ssrMode} from "@/constants";

const CustomerReview = () => {
    const {isDesktop} = useDevices();

    const [activeReview, setActiveReview] = useState('/images/home/customer-service/image-avt.png');

    const renderBottomCenterControl = (slideControl) => {
        return (
            <div className={styles.dotWrapper}>
                {[...Array(slideControl.slideCount).keys()].map((item, index) => (
                    <div key={index}
                         className={classNames(styles.dotItem, {
                             [styles.active]: index === slideControl.currentSlide
                         })}
                         onClick={() => slideControl.goToSlide(index)}/>
                ))}
            </div>
        )
    }

    return (
        <div className={styles.background}>
            <div className={classNames(styles.customerReviewWrapper, {
                "container": isDesktop
            })}>
                <h2>Khách hàng nói gì<br/> về chúng tôi</h2>
                <Desktop>
                    <div className={styles.content}>
                        <div className={styles.reviewContent}>
                            <Icon/>
                            <p>
                                Hello Arthur! How are you?! So, I don't remember ecxactly, but I'm not sure that we saw
                                this
                                on that meting. I'm missing some ideais at this moment, but I'm not so sure about that.
                                So,
                                can you check this content, please?
                            </p>
                            <div className={styles.currentAvatar}>
                                <img src={activeReview} alt={""}/>
                                <p className={styles.name}>Jane Cooper</p>
                                <p>President of Sales</p>
                            </div>
                        </div>
                        <Desktop>
                            <img className={styles.review1}
                                 src={"/images/home/customer-service/image-avt.png"}
                                 alt={""}
                                 onClick={() => setActiveReview('/images/home/customer-service/image-avt.png')}/>
                            <img className={styles.review2}
                                 src={"/images/home/customer-service/image-avt1.png"}
                                 alt={""}
                                 onClick={() => setActiveReview('/images/home/customer-service/image-avt1.png')}/>
                            <img className={styles.review3}
                                 src={"/images/home/customer-service/image-avt.png"}
                                 alt={""}
                                 onClick={() => setActiveReview('/images/home/customer-service/image-avt.png')}/>
                            <img className={styles.review4}
                                 src={"/images/home/customer-service/image-avt1.png"}
                                 alt={""}
                                 onClick={() => setActiveReview('/images/home/customer-service/image-avt1.png')}/>
                            <img className={styles.review5}
                                 src={"/images/home/customer-service/image-avt1.png"}
                                 alt={""}
                                 onClick={() => setActiveReview('/images/home/customer-service/image-avt.png')}/>
                            <img className={styles.review6}
                                 src={"/images/home/customer-service/image-avt.png"}
                                 alt={""}
                                 onClick={() => setActiveReview('/images/home/customer-service/image-avt.png')}/>
                        </Desktop>
                    </div>
                </Desktop>
                <Mobile>
                    <CustomCarousel
                        renderCenterLeftControls={null}
                        renderCenterRightControls={null}
                        renderBottomCenterControls={renderBottomCenterControl}>
                        <div className={styles.content}>
                            <div className={styles.reviewContent}>
                                <Icon/>
                                <p>
                                    Hello Arthur! How are you?! So, I don't remember ecxactly, but I'm not sure that we
                                    saw
                                    this
                                    on that meting. I'm missing some ideais at this moment, but I'm not so sure about
                                    that.
                                    So,
                                    can you check this content, please?
                                </p>
                                <div className={styles.currentAvatar}>
                                    <img src={"/images/home/customer-service/image-avt.png"} alt={""}/>
                                    <p className={styles.name}>Jane Cooper</p>
                                    <p>President of Sales</p>
                                </div>
                            </div>

                        </div>
                        <div className={styles.content}>
                            <div className={styles.reviewContent}>
                                <Icon/>
                                <p>
                                    Hello Arthur! How are you?! So, I don't remember ecxactly, but I'm not sure that we
                                    saw
                                    this
                                    on that meting. I'm missing some ideais at this moment, but I'm not so sure about
                                    that.
                                    So,
                                    can you check this content, please?
                                </p>
                                <div className={styles.currentAvatar}>
                                    <img src={"/images/home/customer-service/image-avt.png"} alt={""}/>
                                    <p className={styles.name}>Jane Cooper</p>
                                    <p>President of Sales</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.reviewContent}>
                                <Icon/>
                                <p>
                                    Hello Arthur! How are you?! So, I don't remember ecxactly, but I'm not sure that we
                                    saw
                                    this
                                    on that meting. I'm missing some ideais at this moment, but I'm not so sure about
                                    that.
                                    So,
                                    can you check this content, please?
                                </p>
                                <div className={styles.currentAvatar}>
                                    <img src={"/images/home/customer-service/image-avt.png"} alt={""}/>
                                    <p className={styles.name}>Jane Cooper</p>
                                    <p>President of Sales</p>
                                </div>
                            </div>
                        </div>
                    </CustomCarousel>
                </Mobile>
            </div>
        </div>
    )
}

export default CustomerReview;