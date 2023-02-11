import React, {useState} from "react";
import classNames from "classnames";

import AvatarIcon from "../../assets/icons/ic-avt.svg";

import styles from "./OutstandingFeature.module.scss";
import {Desktop} from "@/components/Common/Media";

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
                Tận dụng sức mạnh công nghệ để nâng <Desktop><br/></Desktop>cao chất lượng giảng dạy
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
                                <img src="/images/home/outstanding-feature/student.png"/>
                                <div className={classNames(styles.descriptionGroup, styles.number5)}>
                                    <span><p>1</p></span>
                                    <p className={styles.description}>Hệ thống câu hỏi đa dạng, độc đáo</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number6)}>
                                    <span><p>2</p></span>
                                    <p className={styles.description}>Phân loại đề thi theo nhiều cấp độ</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number7)}>
                                    <span><p>3</p></span>
                                    <p className={styles.description}>Luyện tập với nhiều bài đa dạng</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number8)}>
                                    <span><p>4</p></span>
                                    <p className={styles.description}>Thoả sức làm bài thi thử</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number9)}>
                                    <span><p>5</p></span>
                                    <p className={styles.description}>Có kết quả ngay sau khi hoàn thành bài thi</p>
                                </div>
                            </div>
                        }
                        {
                            activeTab === TABS.PARENTS &&
                            <div className={styles.contentWrapper}>
                                <img src="/images/home/outstanding-feature/parent.png"/>
                                <div className={classNames(styles.descriptionGroup, styles.number10)}>
                                    <span><p>1</p></span>
                                    <p className={styles.description}>Theo dõi tình trạng học tập của con</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number11)}>
                                    <span><p>2</p></span>
                                    <p className={styles.description}>Biết được lớp học con đang tham gia</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number12)}>
                                    <span><p>3</p></span>
                                    <p className={styles.description}>Nhận thông báo về bài thi của con</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number13)}>
                                    <span><p>4</p></span>
                                    <p className={styles.description}>Nắm được lịch thi của con</p>
                                </div>
                            </div>
                        }
                        {
                            activeTab === TABS.TEACHER &&
                            <div className={classNames(styles.contentWrapper, styles.number1)}>
                                <img src="/images/home/outstanding-feature/teacher.png"/>
                                <div className={classNames(styles.descriptionGroup, styles.number14)}>
                                    <span><p>1</p></span>
                                    <p className={styles.description}>Quản lý Lịch thi & đề thi rõ ràng</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number15)}>
                                    <span><p>2</p></span>
                                    <p className={styles.description}>Cấu trúc đề thi đa dạng</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number16)}>
                                    <span><p>3</p></span>
                                    <p className={styles.description}>Tự thiết lập đề thi hoặc sử dụng mẫu từ
                                        TestBank</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number17)}>
                                    <span><p>4</p></span>
                                    <p className={styles.description}>Dễ dàng quản lý lớp học & học viên của mình</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number18)}>
                                    <span><p>5</p></span>
                                    <p className={styles.description}>Nắm được toàn bộ tình trạng học tập của học
                                        viên</p>
                                </div>
                            </div>
                        }
                        {
                            activeTab === TABS.SCHOOL &&
                            <div className={styles.contentWrapper}>
                                <img src="/images/home/outstanding-feature/school.png"/>
                                <div className={classNames(styles.descriptionGroup, styles.number19)}>
                                    <span><p>1</p></span>
                                    <p className={styles.description}>Quản lý lớp học, giáo viên & học sinh chặt chẽ</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number20)}>
                                    <span><p>2</p></span>
                                    <p className={styles.description}>Quản lý toàn bộ đề thi của trường</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number21)}>
                                    <span><p>3</p></span>
                                    <p className={styles.description}>Nhận đóng góp đề thi từ giáo viên</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number22)}>
                                    <span><p>4</p></span>
                                    <p className={styles.description}>Báo cáo quản lý trực quan, đa đạng</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number23)}>
                                    <span><p>5</p></span>
                                    <p className={styles.description}>Nắm được toàn bộ tình trạng học tập của học
                                        viên</p>
                                </div>
                                <div className={classNames(styles.descriptionGroup, styles.number24)}>
                                    <span><p>6</p></span>
                                    <p className={styles.description}>Và nhiều tính năng khác...</p>
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