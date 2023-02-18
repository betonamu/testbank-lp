import React from "react";

import BaseDropdownMenu from "@/components/Common/Controls/BaseDropdownMenu";
import {headerItems} from "@/components/Layout/Header/data";
import {generateUniqueId} from "@/utils";
import styles from "./MenuMobile.module.scss";

const MenuMobile = ({scrollToElement, setIsShowMenu}) => {
    const onClickItem = (value) => {
        setIsShowMenu(false);
        scrollToElement(value);
    }

    return (
        <div className={styles.menuMobileWrapper}>
            <BaseDropdownMenu className={styles.menuDropdown} onClickOutside={setIsShowMenu}>
                {headerItems.map((item, index) => (
                    <div key={generateUniqueId('header')}
                         className={styles.item}
                         onClick={() => onClickItem(item.referenceId)}>
                        {item.name}
                    </div>
                ))}
            </BaseDropdownMenu>
        </div>
    )
}

export default MenuMobile;