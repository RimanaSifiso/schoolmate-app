import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { BsHouse, BsBook, BsPen, BsPerson } from 'react-icons/bs'

export default () => {
  const { state } = useContext(AppContext)
  const { darkTheme, currentUser } = state

  const router = useRouter()

  const styles = {
    active: {
      color: '#0669bf',
    },
    inactive: {
      color: 'rgba(0,0,0, 0.8)',
    },
  }

  const handleActiveTab = (path) => (router.pathname === path ? 'active' : '')

  console.log(router.pathname)

  return (
    <nav className={`MobileNav ${darkTheme ? 'dark' : ''}`}>
      <button
        className={'btn btn-outline ' + handleActiveTab('/')}
        onClick={() => router.push('/')}
      >
        <BsHouse />
      </button>
      <button
        className={'btn btn-outline ' + handleActiveTab('/learn')}
        onClick={() => router.push('/learn')}
      >
        <BsBook />
      </button>
      <button
        className={'btn btn-outline ' + handleActiveTab('/practice')}
        onClick={() => router.push(currentUser ? '/practice' : '/signin')}
      >
        <BsPen />
      </button>
      <button
        className={
          'btn btn-outline ' +
          handleActiveTab('/dashboard') +
          ' ' +
          handleActiveTab('/signin')
        }
        onClick={() => router.push(currentUser ? '/dashboard' : '/signin')}
      >
        <BsPerson />
      </button>
    </nav>
  )
}
