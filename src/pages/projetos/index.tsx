import {useState, useEffect} from 'react'
import {GetServerSideProps} from 'next'
import Link from 'next/link'
import {format} from 'date-fns'
import api_git from '../../services/api_github'
import { useTheme } from '../../hooks/theme'
import styles from './projetos.module.scss'
import { ptBR } from 'date-fns/locale'
//import api from '../../services/api'

interface Repository {
  name:string;
  description: string;
  html_url: string;
  updated_at: string;
  topics: [String];
}

interface ProjectsProps{
  repositories :[Repository];
}

export default function Projects(props: ProjectsProps) {
  /*const [repos, setRepos] = useState<Repository[]>(() => {
    if (typeof window !== "undefined") {    
      const storagedRepositories =  localStorage.getItem('@Marcella:repositories')
      
      if(storagedRepositories){
        localStorage.removeItem('@Marcella:repositories')
        return JSON.parse(storagedRepositories)
      }
      else if(props.repositories){
        return props.repositories
      }
      return []
    }
    return []
  })*/
  const [repos, setRepos] = useState<Repository[]>(props.repositories)
  const { globalTheme } = useTheme()

  
  useEffect(() => {
    localStorage.setItem('@Marcella:repositories', JSON.stringify(repos));
  }, [repos]);

  /*useEffect(()=>{
    const newRepo = {
      description: 'Portfólio sendo construído com react, next e sass. Está servindo também como aprendizado de novas tecnologias, que para mim são next e o sass especificamente.',
      name:'marcella',
      updated_at: '2021-05-19T11:42:35Z',
      html_url:'https://github.com/mlasa/marcella',
      topics: ['react', 'nodejs', 'sass', 'mongodb', 'nextjs']
    }
    
    setRepos([...repos, newRepo])
  },[]) */

  return (
    <div className={`${styles.projectsContainer} ${styles[globalTheme]}`}>
      <section className={`${styles[globalTheme]}`}>
        {
          repos.map(repo =>{
            return(
              <Link key={repo.html_url} href={repo.html_url}>
                <div className={`${styles.repository} ${styles[globalTheme]}`}>
                  <div className={styles.repoInfo}>
                    <h3>{repo.name}</h3>
                    <small>
                      {format(new Date(repo.updated_at), `dd MMMM yyyy`, {
                        locale: ptBR
                      })}
                    </small>
                    <p>{repo.description}</p>
                  </div>
                  {
                    repo.topics && 
                    <div className={styles.repoTopics}>
                      {
                        repo.topics.map(topic => {
                        return(
                          <span className={`${styles[globalTheme]}`}>
                            {topic}
                          </span>
                        )})
                      }
                    </div>
                  }
                </div>
              </Link>
            )
          })
        }
      </section>
    </div>
  )
}


export const getServerSideProps:GetServerSideProps = async (ctx)=> {
  /*const responseRepository = await api_git.get('/mlasa/marcella')

  const responseRepoTopics = await api_git.get('/mlasa/marcella/topics',
  {
    headers: {
      accept:'Accept: application/vnd.github.mercy-preview+json',
    }
  })*/

  const responseRepository = [{
      description: 'Portfólio sendo construído com react, next e sass. Está servindo também como aprendizado de novas tecnologias, que para mim são next e o sass especificamente.',
      name:'marcella',
      updated_at: '2021-05-19T11:42:35Z',
      html_url:'https://github.com/mlasa/marcella',
      topics: ['react', 'nodejs', 'sass', 'mongodb', 'nextjs']
    }]

  return {
    props:{
      repositories: responseRepository
    }
  }

};