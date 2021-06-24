
export const setCurrentScreen = (currentScreen) => async (dispatch) => {
    dispatch({ type: "SET_CURRENT_SCREEN",  currentScreen: currentScreen})
}