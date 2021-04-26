import HookProviders from '../hooks'
import { LIGHT_THEME } from '../hooks/theme'
import '../styles/globals.scss'


const MyApp = ({ Component, pageProps }) => {
  return (
    <HookProviders>
      <Component {...pageProps} changeTheme={LIGHT_THEME} />
    </HookProviders>
  )
}

export default MyApp
