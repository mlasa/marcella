import { createContext, useContext, useState } from 'react'

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

interface IThemeContextData {
  globalTheme: string;
  changeThemeColor(): void;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData)

const ThemeProvider = ({ children }) => {
  const [globalTheme, setGlobalTheme] = useState('light')

  const changeThemeColor = () => {
    if (globalTheme === 'light') setGlobalTheme('dark')
    else setGlobalTheme('light')
  }

  return (
    <ThemeContext.Provider value={{ changeThemeColor, globalTheme }}>
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