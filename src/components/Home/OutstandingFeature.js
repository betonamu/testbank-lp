import React, {useState} from "react";

import Avatar from "../../assets/icons/ic-avt.svg"

import styles from "./OutstandingFeature.module.scss";
import classNames from "classnames";

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
        <div className={styles.outstandingFeatureWrapper}>
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
                                    <Avatar/>
                                </div>
                                {item.tabName}
                            </button>))}
                    </div>

                    <div className={styles.tabContent}>
                        {
                            activeTab === TABS.OVERVIEW &&
                            <div>
                                <img src="/images/home/outstanding-feature/overview.png"/>
                            </div>
                        }
                        {
                            activeTab === TABS.STUDENT && <div>
                                <img src="/images/home/outstanding-feature/student.png"/>
                            </div>
                        }
                        {
                            activeTab === TABS.PARENTS && <div>
                                <img src="/images/home/outstanding-feature/parent.png"/>
                            </div>
                        }
                        {
                            activeTab === TABS.TEACHER && <div>
                                <img src="/images/home/outstanding-feature/teacher.png"/>
                            </div>
                        }
                        {
                            activeTab === TABS.SCHOOL && <div>
                                <img src="/images/home/outstanding-feature/school.png"/>
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