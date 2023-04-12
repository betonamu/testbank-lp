import classNames from "classnames";
import { useState } from "react";

import Button from "@/components/Common/Controls/Button";
import { studentPricings } from "@/components/Home/data/price";

import Parent from "../../assets/icons/parent.svg";
import School from "../../assets/icons/school.svg";
import Student from "../../assets/icons/student.svg";
import Teacher from "../../assets/icons/teacher.svg";
import TickOrangeIcon from "../../assets/icons/tick-orange.svg";
import TickIcon from "../../assets/icons/tick.svg";

import Container from "@/components/Common/Container";
import Select from "@/components/Common/Controls/Select";
import { Desktop, Mobile } from "@/components/Common/Media";
import styles from "./Subscribe.module.scss";

const TABS = {
    STUDENT: 'student',
    TEACHER: 'teacher',
    PARENTS: 'parent',
    SCHOOL: 'school',
};
const Subscribe = () => {
    const tabItems = [
        {
            label: 'Học viên',
            value: TABS.STUDENT,
            icon: <Student />,
        },
        {
            label: 'Phụ huynh',
            value: TABS.PARENTS,
            icon: <Parent />,
        },
        {
            label: 'Giáo viên',
            value: TABS.TEACHER,
            icon: <Teacher />,
        },
        {
            label: 'Nhà trường',
            value: TABS.SCHOOL,
            icon: <School />,
        },
    ];

    const [activeTab, setActiveTab] = useState(TABS.STUDENT);
    const [selectedPlan, setSelectedPlan] = useState(-1);
    const switchTab = (tabName) => {
        setActiveTab(tabName);
    };

    const onSelectPlan = (planIndex) => {
        if (selectedPlan === planIndex) setSelectedPlan(-1);
        else setSelectedPlan(planIndex);
    };

    return (
        <div
            className={classNames(styles.subscribeWrapper, styles.background)}
            id={'pricing'}>
            <Container>
                <div className={styles.top}>
                    <h3>Bạn đã sẵn sàng</h3>

                    <h2>
                        Trải nghiệm i-test
                        <br /> ngay hôm nay?
                    </h2>
                    <Mobile>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}>
                            <Select
                                options={tabItems}
                                defaultValue={tabItems[0]}
                                onChange={(e) => switchTab(e.value)}
                                className={styles.dropdown}
                            />
                        </div>
                    </Mobile>
                    <div className={styles.tabs}>
                        <Desktop>
                            <div className={styles.tabItems}>
                                {tabItems.map((item) => (
                                    <button
                                        key={item.value}
                                        className={classNames({
                                            [styles.active]:
                                                activeTab === item.value,
                                        })}
                                        onClick={() => switchTab(item.value)}>
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </Desktop>
                        <div className={styles.tabContent}>
                            {studentPricings[activeTab].map((item, index) => (
                                <div
                                    key={`${activeTab + index}`}
                                    className={classNames(styles.pricingItem, {
                                        [styles.activePlan]:
                                            selectedPlan === index,
                                    })}>
                                    <div>
                                        <p className={styles.planName}>
                                            {item.label}
                                        </p>
                                        <h2>{item.price}</h2>

                                        <div className={styles.descriptions}>
                                            {item.descriptions.map(
                                                (des, index) => (
                                                    <div
                                                        key={index}
                                                        className={
                                                            styles.desItem
                                                        }>
                                                        <span>
                                                            <TickIcon />
                                                        </span>
                                                        <div>
                                                            <p>{des.label}</p>
                                                            {des.option && (
                                                                <p
                                                                    className={
                                                                        styles.option
                                                                    }>
                                                                    {des.option}
                                                                </p>
                                                            )}
                                                            {des.lists
                                                                ?.length && (
                                                                <ul>
                                                                    {des.lists.map(
                                                                        (
                                                                            list,
                                                                            index
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    index
                                                                                }>
                                                                                {
                                                                                    list
                                                                                }
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <Button
                                            type="outline"
                                            className={styles.selectBtn}
                                            icon={
                                                selectedPlan === index && (
                                                    <TickOrangeIcon />
                                                )
                                            }
                                            onClick={() => onSelectPlan(index)}
                                            clicked={selectedPlan === index}>
                                            {selectedPlan !== index
                                                ? 'Chọn'
                                                : 'Đang chọn'}
                                        </Button>
                                        <p className={styles.dayTrial}>
                                            {item.isTrial &&
                                                'Miễn phí dùng thử: X ngày'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {selectedPlan !== -1 && (
                            <div className={styles.trial}>
                                <input placeholder="Nhập email hoặc SĐT để dùng thử miễn phí" />
                                <Button type="primary">Dùng thử ngay</Button>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h3>Những con số ấn tượng</h3>
                    <div className={styles.content}>
                        <div className={styles.item}>
                            <p>2,467</p>
                            <p>
                                <span>Tài khoản</span>
                                <br /> đang sử dụng
                            </p>
                        </div>
                        <div className={classNames(styles.item, styles.order1)}>
                            <p>2,467</p>
                            <p>
                                <span>Học sinh & phụ huynh</span>
                                <br /> tin dùng
                            </p>
                        </div>
                        <div className={classNames(styles.item, styles.order2)}>
                            <p>470</p>
                            <p>
                                <span>Giáo viên & Nhà trường</span>
                                <br /> tham gia tổ chức thi trực tuyến
                            </p>
                        </div>
                        <div className={classNames(styles.item, 'order-1')}>
                            <p>1,364 +</p>
                            <p>
                                <span>Đề thi</span>
                                <br /> được lập ra
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Subscribe;
