import { ChakraProvider } from "@chakra-ui/react"

import HookProviders from '../hooks'
import { LIGHT_THEME } from '../hooks/theme'
import { useTheme } from '../hooks/theme'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  const { globalTheme } = useTheme();
  return (

    <ChakraProvider>
      <HookProviders>
        <Component {...pageProps} changeTheme={LIGHT_THEME} />
      </HookProviders>
    </ChakraProvider>
  )
}

export default MyApp
