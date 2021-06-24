const initialState = {
  currentScreen: 0
}
export default function MyReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_SCREEN':
      return { ...state, currentScreen: action.currentScreen }
    default:
      return state;
  }
}