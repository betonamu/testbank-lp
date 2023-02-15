export const ssrMode = typeof window === "undefined";


export const metaDefaults = ({origin, href}) => ({
    description: "",
    image: "",
    title: "Test Bank - Giải Pháp Đề Thi Trắc Nghiệm",
    type: "website",
    url: ssrMode ? href : window.location.origin,
});