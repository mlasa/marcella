import styles from './sobre.module.scss'
import { useTheme } from '../../hooks/theme'

function About() {
  const { globalTheme } = useTheme()
  return (
    <div className={`${styles.aboutContainer} ${styles[globalTheme]}`}>
      <h1>Sobre</h1>
    </div>
  )
}

export default About