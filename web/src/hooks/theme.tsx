import { createContext, useContext, useState } from 'react'

interface ThemeContextData {
  isDarkTheme: boolean;
  setIsDarkTheme(bool: boolean): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = (): ThemeContextData => {
  const themeContext = useContext(ThemeContext)
  if (!themeContext) throw new Error('useTheme hook cannot be used outside the ThemeProvider')

  return themeContext
}

export { ThemeProvider, useTheme }