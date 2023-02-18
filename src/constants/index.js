export const ssrMode = typeof window === "undefined";

const BASE_PATH = "/"

export const paths = {
    home: BASE_PATH
}

export const phoneRegExp = /^(03|05|07|08|09|01[2689])([0-9]{8})$/;
export const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const TABS = {
    OVERVIEW: 'overview',
    STUDENT: 'student',
    TEACHER: 'teacher',
    PARENTS: 'parents',
    SCHOOL: 'school'
}

export const metaDefaults = ({origin, href}) => ({
    description: "",
    image: "",
    title: "Test Bank - Giải Pháp Đề Thi Trắc Nghiệm",
    type: "website",
    url: ssrMode ? href : window.location.origin,
});