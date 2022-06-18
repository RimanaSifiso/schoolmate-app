import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import {
  BsPerson,
  BsWhatsapp,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsMoonStars,
  BsSun,
} from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'
import displayUser from '../../lib/displayUser'

export default function SideNav() {
  const { state, handleSideNavVisibility, toogleDarkTheme } =
    useContext(AppContext)
  const { darkTheme, sideNavVisible, currentUser } = state

  const router = useRouter()

  return (
    <div
      id="side-nav-wrapper"
      onClick={(e) => handleSideNavVisibility(e)}
      className={`SideNavWrapper ${sideNavVisible ? 'visible' : ''}`}
    >
      <nav
        id="side-nav"
        role={'navigation'}
        className={`SideNav ${darkTheme ? 'dark' : ''}`}
      >
        <div
          onClick={() =>
            router.push(`${currentUser ? '/dashboard' : '/signin'}`)
          }
          className="account-info"
        >
          <div className="user-icon">
            <BsPerson />
          </div>
          <div className="username">
            {currentUser ? (
              <span
                onClick={() => router.push('/dashoard')}
                className="username-display"
              ></span>
            ) : (
              <Link href={'/signin'}>
                {currentUser
                  ? displayUser(currentUser.name, currentUser.surname)
                  : 'Sign in'}
              </Link>
            )}
          </div>
        </div>
        <h3>Quick links</h3>
        <ul className="links">
          <Link href="/learn">Learn</Link>
          <Link href="/practice">Practice</Link>
          <Link href="/papers">Past papers</Link>
          <Link href="/studyresources">Resources</Link>
          <Link href="/blog">Tips and tricks</Link>
          <h3>Get to know us</h3>
          <Link href="/about">Our mission</Link>
          <Link href="/explore">Explore our page</Link>
          <Link href="/testimonials">Testimonials</Link>
        </ul>
        <h3>Theme</h3>
        <div className="settings">
          <div className="settings-theme">
            <label htmlFor="toogle-theme">
              <span className="toogler">
                {darkTheme ? <BsSun /> : <BsMoonStars />}
              </span>
              <span>{darkTheme ? 'Switch to light theme' : 'Switch to dark theme'}</span>
            </label>
            <input
              type="checkbox"
              id="toogle-theme"
              onChange={toogleDarkTheme}
            />
          </div>
        </div>
        <div className="socials">
          <h3 id="social-heading">Chat with us</h3>
          <div className="socials-icons">
            <a href="#" className="socials-icon">
              <BsWhatsapp />
            </a>
            <a href="#" className="socials-icon">
              <BsTwitter />
            </a>
            <a href="#" className="socials-icon">
              <BsInstagram />
            </a>
            <a href="#" className="socials-icon">
              <BsFacebook />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
