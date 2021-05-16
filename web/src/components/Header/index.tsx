import styles from './styles.module.scss'
import { useTheme } from '../../hooks/theme'
import CustomCheckbox from '../CustomCheckbox'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Header(props) {
  const { globalTheme, changeThemeColor } = useTheme();
  return (
    <header className={`
    ${styles.headerContainer}
    ${props.class}
    ${styles[globalTheme]}
    `}>
      <div className={`${styles[globalTheme]}`}>
        {props.children}
      </div>
      {
        globalTheme === 'dark' ? <CustomCheckbox classCheckBox={styles.checkBoxComponent} icon={FiMoon} action={() => changeThemeColor()} /> :
          <CustomCheckbox classCheckBox={styles.checkBoxComponent} icon={FiSun} action={() => changeThemeColor()} />
      }
    </header>
  )
}