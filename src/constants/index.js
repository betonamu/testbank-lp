export const ssrMode = typeof window === "undefined";

const BASE_PATH = "/"

export const paths = {
    home: BASE_PATH
}


export const metaDefaults = ({origin, href}) => ({
    description: "",
    image: "",
    title: "Test Bank - Giải Pháp Đề Thi Trắc Nghiệm",
    type: "website",
    url: ssrMode ? href : window.location.origin,
});