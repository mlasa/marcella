import Link from 'next/link'
import { ChakraProvider } from "@chakra-ui/react"

import HookProviders from '../hooks'
import { LIGHT_THEME } from '../hooks/theme'
import { useTheme } from '../hooks/theme'
import Header from '../components/Header'
import '../styles/globals.scss'



const MyApp = ({ Component, pageProps }) => {
  const { globalTheme } = useTheme();
  return (

    <ChakraProvider>
      <HookProviders>
        <div className="app">
          <Header className="header" />
          <Component {...pageProps} changeTheme={LIGHT_THEME} />
        </div>
      </HookProviders>
    </ChakraProvider>
  )
}

export default MyApp
