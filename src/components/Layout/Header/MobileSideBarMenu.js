import {useEffect} from "react";
import {useRouter} from "next/router";

import styles from "./MobileSideBarMenu.module.scss";
import BasicModal from "@/components/Common/Controls/BasicModal";
import useDevices from "@/hooks/useDevices";

const MobileSideBarMenu = ({
                               onClose,
                               isShow,
                               onShowLogin,
                               onShowRegister
                           }) => {

    const {pathname} = useRouter();
    const {isDesktop} = useDevices();

    useEffect(() => {
        if (isShow) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDesktop, pathname]);

    return (
        <BasicModal
            isOpen={isShow}
            onRequestClose={onClose}
            overlayClassName={styles.mobileSidebarMenu}
            contentClassName={styles.wrapper}
        >
            <div>12312312</div>
        </BasicModal>
    )
};

export default MobileSideBarMenu;

