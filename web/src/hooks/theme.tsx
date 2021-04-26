import { createContext, useContext, useState } from 'react'

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

interface IThemeContextData {
  isDarkTheme: boolean;
  setIsDarkTheme(bool: boolean): void;
  globalTheme: string;
  setGlobalTheme(theme: string): void;
  changeThemeColor(): void;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [globalTheme, setGlobalTheme] = useState('light')

  const changeThemeColor = () => {
    if (globalTheme === 'light') setGlobalTheme('dark')
    else setGlobalTheme('light')

    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeContext.Provider value={{ changeThemeColor, isDarkTheme, setIsDarkTheme, globalTheme, setGlobalTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = (): IThemeContextData => {
  const themeContext = useContext(ThemeContext)
  if (!themeContext) throw new Error('useTheme hook cannot be used outside the ThemeProvider')

  return themeContext
}

export { ThemeProvider, useTheme }