import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import classNames from "classnames";

import {paths} from "@/constants";
import useDevices from "@/hooks/useDevices";
import Container from "@/components/Common/Container";
import Button from "@/components/Common/Controls/Button";
import {Desktop, Mobile} from "@/components/Common/Media";
import DropdownLanguage from "@/components/Layout/Header/DropdownLanguage";
import MobileSideBarMenu from "@/components/Layout/Header/MobileSideBarMenu";

import Logo from "../../../assets/icons/logo.svg";
import MenuIcon from "../../../assets/icons/menu.svg";
import Profile from "../../../assets/icons/profile.svg";
import VietNamFlag from "../../../assets/icons/vn-flag.svg";
import Chevron from "../../../assets/icons/chevron-down.svg";
import LogoMobile from "../../../assets/icons/logo-mobile.svg";

import styles from "./Header.module.scss";
import MenuMobile from "@/components/Layout/Header/MenuMobile";
import {generateUniqueId} from "@/utils";
import {headerItems} from "@/components/Layout/Header/data";
import DropdownProfileMobile from "@/components/Layout/Header/DropdownProfileMobile";

const Header = () => {
    const {isDesktop} = useDevices();
    const headerRef = useRef();

    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const [isShowProfile, setIsShowProfile] = useState(false);

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        //add offset to scroll
        element.style.scrollMargin = isDesktop ? '92px' : '77px';
        element.scrollIntoView({behavior: 'smooth'});
    }

    const trackScroll = () => {
        if (headerRef.current) {
            headerRef.current.dataset.scroll = window.scrollY > 10 ? 'scroll-out' : 'scroll-in';
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', trackScroll);

        return () => {
            document.removeEventListener('scroll', trackScroll);
        }
    }, []);

    return (
        <header className={classNames(styles.header)} ref={headerRef}>
            <div className={classNames(styles.fixedHeader)}>
                <Container>
                    <Desktop>
                        <div className={styles.leftSide}>
                            <Link href={paths.home}>
                                <Logo className={"cursor-pointer"}/>
                            </Link>
                            {headerItems.map(item => (
                                <a key={generateUniqueId('header')} className={styles.navItem}
                                   onClick={() => scrollToElement(item.referenceId)}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className={styles.rightSide}>
                            <div className={styles.languageGr}
                                 onClick={() => setIsShowDropdown(!isShowDropdown)}>
                                <VietNamFlag/>
                                <Chevron/>

                                {isShowDropdown && <DropdownLanguage/>}
                            </div>
                            <Button className={styles.btnLogin}
                                    type="outline">
                                Đăng nhập
                            </Button>
                            <Button className={styles.btnTrial}
                                    type="primary">
                                Dùng thử miễn phí
                            </Button>
                        </div>
                    </Desktop>
                    <Mobile>
                        <div className={styles.leftSide}>
                            <LogoMobile/>
                        </div>
                        <div className={styles.rightSide}>
                            <div className={classNames(styles.languageGr, 'cursor-pointer')}
                                 onClick={() => setIsShowDropdown(!isShowDropdown)}>
                                <VietNamFlag/>
                                <Chevron/>
                                {isShowDropdown && <DropdownLanguage/>}
                            </div>
                            <div className={styles.profileGr}>
                                <Profile className={classNames(styles.profileIcon, 'cursor-pointer', {
                                    [styles.profileActive]: isShowProfile
                                })}
                                         onClick={() => setIsShowProfile(!isShowProfile)}/>
                                {isShowProfile && <DropdownProfileMobile/>}
                            </div>
                            <div className={styles.menuGr}>
                                <MenuIcon
                                    height={26}
                                    width={26}
                                    className={classNames(styles.hamburgerIcon, 'cursor-pointer', {
                                        [styles.hamburgerActive]: isShowMenu
                                    })}
                                    onClick={() => setIsShowMenu(!isShowMenu)}/>
                                {isShowMenu && <MenuMobile scrollToElement={scrollToElement}
                                                           setIsShowMenu={setIsShowMenu}/>}
                            </div>
                        </div>
                        {/*<MobileSideBarMenu isShow={isShowSidebar} onClose={() => setIsShowSidebar(false)}/>*/}
                    </Mobile>
                </Container>
            </div>
        </header>
    )
}

export default Header;