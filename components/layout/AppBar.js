import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/schoolmate-logo-icon.png'

import { BsMoonStars, BsSun } from 'react-icons/bs'

export default function AppBar() {
  const { state, handleSideNavVisibility, toogleDarkTheme } = useContext(AppContext)
  const { darkTheme } = state
  const router = useRouter()

  return (
    <nav role="navigation" className={`AppBar ${darkTheme ? 'dark' : 'white'}`}>
      <div className="logo-box">
        <div className="logo">
          <Image className="logo-img" src={logo} alt="Schoolmate App logo" />
        </div>
        <div className="app-name for-desktop">
          <h1>schoolmate</h1>
        </div>
      </div>

      <ul className="ul for-desktop" role={'navigation'}>
        <Link href={'/'} className="link-item">
          Home
        </Link>
        <Link href={'/learn'}>Learn</Link>

        <button
          onClick={() => router.push('/signin')}
          className="btn btn-primary white"
        >
          Sign in
        </button>
      </ul>

      <div className="settings-theme">
        <label htmlFor="toogle-theme">
          <span className="toogler">
            {darkTheme ? <BsSun /> : <BsMoonStars />}
          </span>
        </label>
        <input type="checkbox" id="toogle-theme" onChange={toogleDarkTheme} />
      </div>

      <div onClick={(e) => handleSideNavVisibility(e)} className="hamburger">
        <span className="more"></span>
      </div>
    </nav>
  )
}
