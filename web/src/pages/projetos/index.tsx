import styles from './projetos.module.scss'
import { useTheme } from '../../hooks/theme'

function Projects() {
  const { globalTheme } = useTheme()
  return (
    <div className={`${styles.projectsContainer} ${styles[globalTheme]}`}>
      <h1>Projetos</h1>
    </div>
  )
}

export default Projects