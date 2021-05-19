import {GetServerSideProps} from 'next'
import api_git from '../../services/api_github'
import { useTheme } from '../../hooks/theme'
import styles from './projetos.module.scss'

interface Repository{
  name: string;
  html_url: string;
  description: string;
}
interface ProjectsProps{
  repository : Repository;
}

export default function Projects(props: ProjectsProps) {
  const { globalTheme } = useTheme()
  const {repository} = props

  return (
    <div className={`${styles.projectsContainer} ${styles[globalTheme]}`}>
      <h1>Projetos[em desenvolvimento]</h1>
        <div>
          <p>{repository.name}</p>
          <p>{repository.html_url}</p>
          <p>{repository.description}</p>
        </div>
    </div>
  )
}


export const getServerSideProps = async (ctx)=> {
  console.log('opa nene')
  const response = await api_git.get('/mlasa/marcella')
  console.log('opaa===============================================',response.data)

  return {
    props:{
      repository: response.data
    }
  }

};