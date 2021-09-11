import HookProviders from '../hooks'
import { LIGHT_THEME } from '../hooks/theme'
import Header from '../components/Header'
import '../styles/globals.scss'
import Link from 'next/link'
import { useTheme } from '../hooks/theme'


const MyApp = ({ Component, pageProps }) => {
  const { globalTheme } = useTheme();
  return (
    <HookProviders>
      <div className="page">
        <Header class="header">
          {/*<Link href="/">Início</Link>*/}
        </Header>
        <div className="content">
          <Component {...pageProps} changeTheme={LIGHT_THEME} />
        </div>
      </div>
    </HookProviders>
  )
}

export default MyApp
