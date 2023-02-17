import React from "react";

import VietNamFlag from "../../../assets/icons/vn-flag.svg";
import EnglishFlag from "../../../assets/icons/en-flag.svg";

import styles from "./DropdownLanguage.module.scss";
import BaseDropdownMenu from "@/components/Common/Controls/BaseDropdownMenu";

const DropdownLanguage = () => {
    return (
        <div className={styles.dropdownLanguageWrapper}>
            <BaseDropdownMenu
                textHeader={'Thay đổi ngôn ngữ'}
                className={styles.dropdownMenu}>
                <div className={styles.item}>
                    <VietNamFlag height={16} width={16}/>
                    Tiếng Việt
                </div>
                <div className={styles.item}>
                    <EnglishFlag/>
                    Tiếng Anh
                </div>
            </BaseDropdownMenu>
        </div>
    );
}

export default DropdownLanguage;