import HookProviders from '../hooks'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <HookProviders>
      <Component {...pageProps} />
    </HookProviders>
  )
}

export default MyApp
