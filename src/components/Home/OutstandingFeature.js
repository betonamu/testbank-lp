import React, {useState} from "react";
import classNames from "classnames";

import {Desktop, Mobile} from "@/components/Common/Media";
import CustomCarousel from "@/components/Common/CustomCarousel";
import useDevices from "@/hooks/useDevices";
import Container from "@/components/Common/Container";
import {TABS} from "@/constants";
import {outstandingFeatures} from "@/components/Home/data/out-standing-feature";
import {generateUniqueId} from "@/utils";

import Overview from "../../assets/icons/overview.svg";
import Student from "../../assets/icons/student.svg";
import Parent from "../../assets/icons/parent.svg";
import Teacher from "../../assets/icons/teacher.svg";
import School from "../../assets/icons/school.svg";

import styles from "./OutstandingFeature.module.scss";

const OutstandingFeature = () => {
    const tabItems = [
        {
            tabName: 'Tổng quan',
            tabValue: TABS.OVERVIEW,
            icon: <Overview/>
        },
        {
            tabName: 'Học viên',
            tabValue: TABS.STUDENT,
            icon: <Student/>
        },
        {
            tabName: 'Phụ huynh',
            tabValue: TABS.PARENTS,
            icon: <Parent/>
        },
        {
            tabName: 'Giáo viên',
            tabValue: TABS.TEACHER,
            icon: <Teacher/>
        },
        {
            tabName: 'Nhà trường',
            tabValue: TABS.SCHOOL,
            icon: <School/>
        },
    ];

    const [activeTab, setActiveTab] = useState(TABS.OVERVIEW);
    const switchTab = (tabName) => {
        setActiveTab(tabName);
    }

    const {isDesktop} = useDevices();

    const renderBottomControl = (slideControl) => {
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
        <div className={classNames(styles.outstandingFeatureWrapper)} id={"feature"}>
            <h3>Tính năng nổi bật</h3>
            <h2>
                Tận dụng sức mạnh công nghệ để nâng <Desktop><br/></Desktop>cao chất lượng giảng dạy
            </h2>
            <Container>
                <div className={styles.featureTabs}>
                    <div className={styles.tabs}>
                        <Desktop>
                            <div className={styles.tabItems}>
                                {tabItems.map(item => (
                                    <button key={item.tabValue} className={
                                        classNames(styles.item, {
                                            [styles.active]: activeTab === item.tabValue
                                        })}
                                            onClick={() => switchTab(item.tabValue)}>
                                        <div>
                                            {item.icon}
                                        </div>
                                        {item.tabName}
                                    </button>))}
                            </div>
                            <div className={styles.tabContent}>
                                {outstandingFeatures.map((item) => {
                                    let currentStartIndex = item.startIndex;
                                    return (
                                        <div key={generateUniqueId('feature')}
                                             className={classNames(styles.contentWrapper, {
                                                 [styles.active]: activeTab === item.tabName
                                             })}>
                                            <img src={item.bgImage} alt=""/>
                                            {item.descriptions.map((des, index) => (
                                                <div key={generateUniqueId('des-item')}
                                                     className={classNames(styles.descriptionGroup, styles[`number${currentStartIndex++}`]
                                                     )}>
                                                    <span><p>{index + 1}</p></span>
                                                    <p className={styles.description}>{des}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                })}
                            </div>
                        </Desktop>
                    </div>
                </div>
            </Container>

            <Mobile>
                <div className={styles.featureTabs}>
                    <div className={styles.tabs}>
                        <div className={styles.tabContent}>
                            <CustomCarousel
                                autoPlay={5000}
                                isInfinity={true}
                                renderTopLeftControls={renderBottomControl}
                                renderBottomCenterControls={null}
                                renderCenterRightControls={null}
                                renderCenterLeftControls={null}>
                                {outstandingFeatures.map((item, index) => {
                                    let currentStartIndex = item.startIndex;
                                    return (
                                        <div key={generateUniqueId('feature')}>
                                            <button className={classNames(styles.item)}>
                                                <div>
                                                    {tabItems[index].icon}
                                                </div>
                                                {tabItems[index].tabName}
                                            </button>
                                            <div className={classNames(styles.contentWrapper)}>
                                                <img src={item.bgImage} alt=""/>
                                                {item.descriptions.map((des, index) => (
                                                    <div key={generateUniqueId('des-item')}
                                                         className={classNames(styles.descriptionGroup)}>
                                                        <span><p>{index + 1}</p></span>
                                                        <p className={styles.description}>{des}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                })}
                            </CustomCarousel>
                        </div>
                    </div>
                </div>
            </Mobile>
        </div>
    );
}

export default OutstandingFeature
;