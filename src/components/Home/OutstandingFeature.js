import React, {useState} from "react";

import styles from "./OutstandingFeature.module.scss";

const tabs = [
    {
        tabName: "overview"
    },
    {
        tabName: "student"
    },
]

const OutstandingFeature = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].tabName);
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
                        <button onClick={() => switchTab(tabs[0].tabName)}>
                            Tổng quan
                        </button>
                        <button onClick={() => switchTab(tabs[1].tabName)}>
                            Học viên
                        </button>
                        <button>
                            Phụ huynh
                        </button>
                        <button>
                            Giáo viên
                        </button>
                        <button>
                            Nhà trường
                        </button>
                    </div>

                    <div className={styles.tabContent}>
                        {
                            activeTab === "overview" &&
                            <div>
                                <img src="/images/home/outstanding-feature/overview.png"/>
                            </div>
                        }
                        {
                            activeTab === "student" && <img src="/images/home/outstanding-feature/student.png"/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutstandingFeature;