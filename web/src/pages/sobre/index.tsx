import styles from './sobre.module.scss'
import { useTheme } from '../../hooks/theme'

function About() {
  const { globalTheme } = useTheme()
  return (
    <div className={`${styles.aboutContainer} ${styles[globalTheme]}`}>
      <h2>Em breve, nesta página ficarão mais informações sobre mim.</h2>
      <strong>-- Marcella 👩‍💻</strong>
    </div>
  )
}

export default About