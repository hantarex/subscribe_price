export const setData = (data, type = "SET") => {
    return {
        type: type,
        payload: data
    }
};