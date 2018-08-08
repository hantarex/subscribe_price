export const MainLoadingActions = (bool, type = "MAIN_LOADING") => {
    return {
        type: type,
        payload: bool
    }
};