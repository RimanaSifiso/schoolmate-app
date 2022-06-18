import { useContext } from 'react'
import AppContext from '../../context/AppContext'

export default function Layout({ children }) {
  const { state } = useContext(AppContext)

  return (
    <div className={`Layout ${state.darkTheme ? 'dark' : ''}`}>{children}</div>
  )
}
