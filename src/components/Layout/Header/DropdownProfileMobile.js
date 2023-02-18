import React from "react";

import styles from "./DropdownProfileMobile.module.scss";
import BaseDropdownMenu from "@/components/Common/Controls/BaseDropdownMenu";
import Button from "@/components/Common/Controls/Button";

const DropdownProfileMobile = ({onClose}) => {
    return (
        <div className={styles.dropdownProfileMobileWrapper}>
            <BaseDropdownMenu className={styles.profileDropdown}
                              onClickOutside={onClose}>
                <div className={styles.item}>
                    <Button type={"outline"}>Đăng nhập</Button>
                </div>
                <div className={styles.item}>
                    <Button>Dùng thử miễn phí</Button>
                </div>
            </BaseDropdownMenu>
        </div>
    )
}

export default DropdownProfileMobile;