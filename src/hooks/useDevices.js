import { useEffect, useState } from 'react';
import { ssrMode } from '@/constants';

const calcDevices = width => {
    const isMobile = width < 768;
    const isDesktop = width > 1280;
    const isTablet = !isDesktop && !isMobile;
    return { isMobile, isTablet, isDesktop };
}

const useDevices = () => {
    const windowInnerWidth = ssrMode ? 1440 : window.innerWidth;
    const [devices, setDevices] = useState(calcDevices(windowInnerWidth));

    const handleResize = e => {
        setDevices(calcDevices(e.target.innerWidth));
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return devices;
}

export default useDevices;
