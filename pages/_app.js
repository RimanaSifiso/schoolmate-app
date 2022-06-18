import '../styles/globals.scss'
import { AppContextProvider } from '../context/AppContext'
import Layout from '../components/layout/Layout'
import AppBar from '../components/layout/AppBar'
import SideNav from '../components/layout/SideNav'
import Main from '../components/layout/Main'
import MobileNav from '../components/layout/MobileNav'

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <AppBar />
        <Main>
          <Component {...pageProps} />
        </Main>
        <MobileNav />
      </Layout>
      <SideNav />
    </AppContextProvider>
  )
}

export default MyApp
