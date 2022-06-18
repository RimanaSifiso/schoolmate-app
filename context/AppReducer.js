export default function AppReducer(state, action) {
  const { type } = action

  switch (type) {
    case 'TOOGLE_DARK_THEME':
      return { ...state, darkTheme: !state.darkTheme }
    case 'OPEN_SIDE_NAV':
      return {
        ...state,
        sideNavVisible: true,
      }
    case 'CLOSE_SIDE_NAV':
      return { ...state, sideNavVisible: false }
    default:
      return state
  }
}
