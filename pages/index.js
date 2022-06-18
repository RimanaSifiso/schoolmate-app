import { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function index() {
  const { state, toogleDarkTheme } = useContext(AppContext)

  return (
    <div className={`page home-page ${state.darkTheme ? 'dark' : 'white'}`}>
      <h1>Hello Home</h1>
    </div>
  )
}
