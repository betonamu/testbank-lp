import React, {useState} from "react";
import classNames from "classnames";

import {studentPricings} from "@/components/Home/data/price";
import Button from "@/components/Common/Controls/Button";

import TickIcon from "../../assets/icons/tick.svg";

import styles from "./Subscribe.module.scss";

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

    const [activeTab, setActiveTab] = useState(TABS.STUDENT);
    const switchTab = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div className={classNames(styles.subscribeWrapper, "container")}>
            <div className={styles.top}>
                <h3>Bạn đã sẵn sàng</h3>

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
                                    <div className={styles.desItem}>
                                        <span><TickIcon/></span>
                                        <div>
                                            <p>{des.label}</p>
                                            {des.option && <p>{des.option}</p>}
                                        </div>
                                    </div>
                                ))}

                                <Button type="outline" className={styles.selectBtn}>Chọn</Button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className={styles.bottom}>
                <h3>Những con số ấn tượng</h3>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <p>2,467</p>
                        <p>
                            <span>Tài khoản</span><br/> đang sử dụng
                        </p>
                    </div>
                    <div className={styles.item}>
                        <p>2,467</p>
                        <p>
                            <span>Học sinh & phụ huynh</span><br/> tin dùng
                        </p>
                    </div>
                    <div className={styles.item}>
                        <p>470</p>
                        <p>
                            <span>Giáo viên & Nhà trường</span><br/> tham gia tổ chức thi trực tuyến
                        </p>
                    </div>
                    <div className={styles.item}>
                        <p>1,364 +</p>
                        <p>
                            <span>Đề thi</span><br/> được lập ra
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;