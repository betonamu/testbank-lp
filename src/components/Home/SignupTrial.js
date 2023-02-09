import React from "react";

import ITestIcon from "../../assets/icons/i-test.svg";

import styles from "./SignupTrial.module.scss";
import Button from "@/components/Common/Controls/Button";

const SignupTrial = () => {
    return (
        <div className={styles.signupTrialWrapper}>
            <h3>Trải nghiệm miễn phí</h3>
            <ITestIcon/>

            <div className={styles.submitForm}>
                <input placeholder="Nhập email hoặc SĐT để dùng thử miễn phí"/>
                <Button type="primary">Dùng thử ngay</Button>
            </div>
        </div>
    )
}

export default SignupTrial;