export const cleanObject = (obj) => {
    let result = {};
    if (obj) {
        Object.keys(obj).forEach((key) => {
            if ((!Array.isArray(obj[key]) && obj[key]) || obj[key]?.length)
                result[key] = obj[key];
        });
    }
    return result;
};

export const generateUniqueId = (pre) => {
    return `${pre || ''}-${new Date().getTime() * Math.random()}`;
}