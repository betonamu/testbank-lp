import React, {useState} from "react";

import styles from "./Subscribe.module.scss";
import classNames from "classnames";
import Avatar from "@/assets/icons/ic-avt.svg";
import {studentPricings} from "@/components/Home/data/price";
import Button from "@/components/Common/Controls/Button";

const TABS = {
    STUDENT: 'student',
    TEACHER: 'teacher',
    PARENTS: 'parents',
    SCHOOL: 'school'
}
const Subscribe = () => {
    const tabItems = [
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
        <div className={styles.subscribeWrapper}>
            <div className={styles.top}>
                <h3>Tính năng nổi bật</h3>

                <h2>
                    Trải nghiệm i-test<br/> ngay hôm nay?
                </h2>
                <div className={styles.tabs}>
                    <div className={styles.tabItems}>
                        {
                            tabItems.map(item => (
                                <button key={item.tabValue} className={
                                    classNames({
                                        [styles.active]: activeTab === item.tabValue
                                    })}
                                        onClick={() => switchTab(item.tabValue)}>

                                    {item.tabName}
                                </button>
                            ))
                        }
                    </div>
                    <div className={styles.tabContent}>
                        {studentPricings.map(item => (
                            <div key={item.price} className={styles.pricingItem}>
                                <p>{item.label}</p>
                                <h2>{item.price}</h2>

                                {item.descriptions.map(des => (
                                    <p>{des}</p>
                                ))}

                                <Button type="outline" className={styles.selectBtn}>Chọn</Button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className={styles.bottom}>
            </div>
        </div>
    )
}

export default Subscribe;