import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const initialState = {
    darkTheme: false,
    sideNavVisible: false,
    currentUser: null,
  }
  const [state, dispatch] = useReducer(AppReducer, initialState)

  /*
      @theme - toggle dark theme
      if dark theme is true, set it to false, else set it to true
  */
  function toogleDarkTheme() {
    dispatch({
      type: 'TOOGLE_DARK_THEME',
    })
  }

  /*
    @side nav visibility
  */

  function handleSideNavVisibility(e) {
    if (
      state.sideNavVisible &&
      e.target !== document.getElementById('side-nav')
    ) {
      dispatch({
        type: 'CLOSE_SIDE_NAV',
      })
    } else {
      dispatch({
        type: 'OPEN_SIDE_NAV',
      })
    }
  }

  return (
    <AppContext.Provider
      value={{
        state,
        toogleDarkTheme,
        handleSideNavVisibility,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
