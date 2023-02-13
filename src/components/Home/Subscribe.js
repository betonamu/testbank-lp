import React, {useState} from "react";
import classNames from "classnames";

import Button from "@/components/Common/Controls/Button";
import {studentPricings} from "@/components/Home/data/price";

import TickIcon from "../../assets/icons/tick.svg";
import TickOrangeIcon from "../../assets/icons/tick-orange.svg";

import styles from "./Subscribe.module.scss";
import Container from "@/components/Common/Container";

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
    const [selectedPlan, setSelectedPlan] = useState(-1);
    const switchTab = (tabName) => {
        setActiveTab(tabName);
    }

    const onSelectPlan = (planIndex) => {
        if (selectedPlan === planIndex)
            setSelectedPlan(-1);
        else
            setSelectedPlan(planIndex);
    }

    return (
        <Container className={styles.background}>
            <div className={styles.subscribeWrapper} id={"pricing"}>
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
                            {studentPricings.map((item, index) => (
                                <div key={item.price} className={classNames(styles.pricingItem, {
                                    [styles.activePlan]: selectedPlan === index
                                })}>
                                    <div>
                                        <p className={styles.planName}>{item.label}</p>
                                        <h2>{item.price}</h2>

                                        <div className={styles.descriptions}>
                                            {item.descriptions.map((des, index) => (
                                                <div key={index} className={styles.desItem}>
                                                    <span><TickIcon/></span>
                                                    <div>
                                                        <p>{des.label}</p>
                                                        {des.option && <p className={styles.option}>{des.option}</p>}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Button type="outline"
                                            className={styles.selectBtn}
                                            icon={selectedPlan === index && <TickOrangeIcon/>}
                                            onClick={() => onSelectPlan(index)}
                                            clicked={selectedPlan === index}>
                                        {selectedPlan !== index ? 'Chọn' : 'Đang chọn'}
                                    </Button>
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
                        <div className={classNames(styles.item, styles.order1)}>
                            <p>2,467</p>
                            <p>
                                <span>Học sinh & phụ huynh</span><br/> tin dùng
                            </p>
                        </div>
                        <div className={classNames(styles.item, styles.order2)}>
                            <p>470</p>
                            <p>
                                <span>Giáo viên & Nhà trường</span><br/> tham gia tổ chức thi trực tuyến
                            </p>
                        </div>
                        <div className={classNames(styles.item, "order-1")}>
                            <p>1,364 +</p>
                            <p>
                                <span>Đề thi</span><br/> được lập ra
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Subscribe;