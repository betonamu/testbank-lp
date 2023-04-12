import * as Yup from "yup";

import { Desktop } from "@/components/Common/Media";
import MetaWrapper from "@/components/Common/MetaWrapper";
import Banner from "@/components/Home/Banner";
import CustomerReview from "@/components/Home/CustomerReview";
import OutstandingFeature from "@/components/Home/OutstandingFeature";
import SignupTrial from "@/components/Home/SignupTrial";
import Subscribe from "@/components/Home/Subscribe";
import useDevices from "@/hooks/useDevices";

import CallIcon from "@/assets/icons/call.svg";
import LocationIcon from "@/assets/icons/location.svg";
import MailIcon from "@/assets/icons/mail.svg";

import BaseForm from "@/components/Common/Controls/BaseForm";
import InputTextField from "@/components/Common/Form/InputTextField";
import TextAreaField from "@/components/Common/Form/TextAreaField";
import { emailRegExp, phoneRegExp } from "@/constants";
import { FormikContext, useFormik } from "formik";
import styles from "./Home.module.scss";

export default function Home() {
    const { isDesktop } = useDevices();

    const onSubmit = (values) => {
        console.log(values);
    };

    const validationSchema = () => {
        return Yup.object().shape({
            name: Yup.string().required("Required"),
            phone: Yup.string()
                .required("Required")
                .matches(phoneRegExp, "Wrong phone, please try again"),
            email: Yup.string()
                .required("Required")
                .matches(emailRegExp, "Wrong email, please try again"),
        });
    };

    const formikBag = useFormik({
        initialValues: {},
        validationSchema,
        onSubmit,
    });

    return (
        <MetaWrapper>
            <div className={styles.homeWrapper}>
                <Banner />
                <OutstandingFeature />
                <Subscribe />
                <CustomerReview />

                <div className={styles.map} id="contact">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1959.6037148091982!2d106.6785536!3d10.7954191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929ffaa45e7%3A0xeacba3ee960d23a0!2sDAI%20TRUONG%20PHAT%20EDUCATION%20JSC!5e0!3m2!1sen!2s!4v1641433661908!5m2!1sen!2s"
                        width={"100%"}
                        height={"100%"}
                        allowFullScreen
                        loading="lazy"
                        style={{ border: 0, marginTop: -150 }}
                    />

                    <FormikContext.Provider value={formikBag}>
                        <BaseForm className={styles.form}>
                            <h3>
                                <span>Liên hệ </span>
                                với chúng tôi
                            </h3>
                            <div className={styles.inputField}>
                                <InputTextField
                                    name={"name"}
                                    placeholder="Tên của bạn"
                                />
                            </div>
                            <div className={styles.inputField}>
                                <InputTextField
                                    name={"phone"}
                                    placeholder="Số điện thoại của bạn"
                                />
                            </div>
                            <div className={styles.inputField}>
                                <InputTextField
                                    name={"email"}
                                    placeholder="Email của bạn"
                                />
                            </div>

                            <div className={styles.inputField}>
                                <TextAreaField
                                    name="feedback"
                                    rows={6}
                                    placeholder="Gửi chúng tôi thắc mắc của bạn"
                                />
                            </div>
                            <p>Liên hệ nhân viên bán hàng</p>
                            <p>
                                <CallIcon />
                                (+84) 28 3845 6936
                            </p>

                            <div className={styles.info}>
                                <h4>
                                    CÔNG TY TNHH EDUCATION SOFTWARE VIỆT NAM
                                </h4>
                                <div className={styles.infoItem}>
                                    <div>
                                        <LocationIcon />
                                    </div>
                                    <p>
                                        148-150 Nguyễn Đình Chính, Phường 8,
                                        Quận Phú Nhuận, Thành phố Hồ Chí Minh.
                                    </p>
                                </div>
                                <div className={styles.infoItem}>
                                    <MailIcon />
                                    <p>(+84) 28 3620 5448</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <CallIcon />
                                    <p>info@dtp-education.com</p>
                                </div>
                            </div>
                        </BaseForm>
                    </FormikContext.Provider>
                </div>

                <Desktop>
                    <SignupTrial />
                </Desktop>
            </div>
        </MetaWrapper>
    );
}
