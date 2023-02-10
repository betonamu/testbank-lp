import React, {useState} from "react";
import classNames from "classnames";

import AvatarIcon from "../../assets/icons/ic-avt.svg";

import styles from "./OutstandingFeature.module.scss";

const TABS = {
    OVERVIEW: 'overview',
    STUDENT: 'student',
    TEACHER: 'teacher',
    PARENTS: 'parents',
    SCHOOL: 'school'
}

const OutstandingFeature = () => {
    const tabItems = [
        {
            tabName: 'Tổng quan',
            tabValue: TABS.OVERVIEW
        },
        {
            tabName: 'Học viên',
            tabValue: TABS.STUDENT
        },
        {
            tabName: 'Phụ huynh',
            tabValue: TABS.PARENTS
        },
        {
            tabName: 'Giáo viên',
            tabValue: TABS.TEACHER
        },
        {
            tabName: 'Nhà trường',
            tabValue: TABS.SCHOOL
        },
    ];
    const [activeTab, setActiveTab] = useState(TABS.OVERVIEW);
    const switchTab = (tabName) => {
        setActiveTab(tabName);
    }
    return (
        <div className={classNames(styles.outstandingFeatureWrapper, "container")}>
            <h3>Tính năng nổi bật</h3>

            <h2>
                Tận dụng sức mạnh công nghệ để nâng <br/>cao chất lượng giảng dạy
            </h2>

            <div className={styles.featureTabs}>
                <div className={styles.tabs}>
                    <div className={styles.tabItems}>
                        {tabItems.map(item => (
                            <button key={item.tabValue} className={
                                classNames({
                                    [styles.active]: activeTab === item.tabValue
                                })}
                                    onClick={() => switchTab(item.tabValue)}>
                                <div>
                                    <AvatarIcon/>
                                </div>
                                {item.tabName}
                            </button>))}
                    </div>

                    <div className={styles.tabContent}>
                        {
                            activeTab === TABS.OVERVIEW &&
                            <div className={styles.contentWrapper}>
                                <img src="/images/home/outstanding-feature/overview.png"/>
                                <div className={classNames(styles.descriptionGroup, styles.number1)}>
                                    <span><p>1</p></span>
                                    <p className={styles.description}>Tổng hợp số liệu trực quan</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number2)}>
                                    <span><p>2</p></span>
                                    <p className={styles.description}>Ngân hàng đề thi tiêu chuẩn, đa dạng</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number3)}>
                                    <span><p>3</p></span>
                                    <p className={styles.description}>Giao diện thân thiện</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number4)}>
                                    <span><p>4</p></span>
                                    <p className={styles.description}>Quản lý lịch thi, <br/>bài thi dễ dàng</p>
                                </div>
                            </div>
                        }
                        {
                            activeTab === TABS.STUDENT && <div className={styles.contentWrapper}>
                                <img src="/images/home/outstanding-feature/overview.png"/>
                                <div className={styles.descriptionGroup}>
                                    <span><p>2</p></span>
                                    <p className={styles.description}>Tổng hợp số liệu trực quan</p>
                                </div>
                            </div>
                        }
                        {
                            activeTab === TABS.PARENTS &&
                            <div className={styles.contentWrapper}>
                                <img src="/images/home/outstanding-feature/overview.png"/>
                                <div className={styles.descriptionGroup}>
                                    <span><p>3</p></span>
                                    <p className={styles.description}>Tổng hợp số liệu trực quan</p>
                                </div>
                            </div>
                        }
                        {
                            activeTab === TABS.TEACHER &&
                            <div className={classNames(styles.contentWrapper, styles.number1)}>
                                <img src="/images/home/outstanding-feature/overview.png"/>
                                <div className={styles.descriptionGroup}>
                                    <span><p>4</p></span>
                                    <p className={styles.description}>Tổng hợp số liệu trực quan</p>
                                </div>
                            </div>
                        }
                        {
                            activeTab === TABS.SCHOOL &&
                            <div className={styles.contentWrapper}>
                                <img src="/images/home/outstanding-feature/overview.png"/>
                                <div className={styles.descriptionGroup}>
                                    <span><p>5</p></span>
                                    <p className={styles.description}>Tổng hợp số liệu trực quan</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutstandingFeature
;