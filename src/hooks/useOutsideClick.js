/* eslint-disable react-hooks/rules-of-hooks */
import {useCallback, useEffect, useRef} from "react";

// Description: function track event click outside element
// Rule:
// onClose: function onClose trigger function of parent
// flag: enable or disable function click outside

export const useOutsideClick = (onClose, flag, isMulti) => {
    if (!flag || Object.prototype.toString.call(onClose) !== "[object Function]")
        return;

    const ref = useRef(isMulti ? [] : null);

    const escapeListener = useCallback((e) => {
        if (e.key === "Escape") {
            onClose();
        }
    }, [onClose]);

    const clickListener = useCallback(
        (e) => {
            if (isMulti) {
                const isClickOutside = ref.current.every(ele => !ele || !ele.contains(e.target))
                isClickOutside && onClose?.();
            } else {
                if (!ref.current?.contains(e.target)) {
                    onClose?.();
                }
            }
        },
        [isMulti, onClose]
    );

    useEffect(() => {
        document.addEventListener("click", clickListener);
        document.addEventListener("keyup", escapeListener);
        return () => {
            document.removeEventListener("click", clickListener);
            document.removeEventListener("keyup", escapeListener);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ref;
};
