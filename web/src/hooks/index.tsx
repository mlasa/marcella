import { ThemeProvider } from './theme'

const HookProviders = ({ children }) => {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}
export default HookProviders