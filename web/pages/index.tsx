import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcella L.A.S.A.</title>
      </Head>
      <div className={styles.container}>
        <div>
          <div className={styles.me}>
            <img src="https://avatars.githubusercontent.com/u/43733159?s=400&u=44809dcf2f7daef870a8404e63973b5519be6a5a&v=4" alt="Foto de Marcella" />
            <h2>Marcella Letícia de A.S. Ananias</h2>
            <strong>Estudante de programação</strong>
            <span>
              <p>
                Formada em Sistemas de Informação desde dezembro de 2020, e estudando programação para trabalhar como desenvolvedora.
                Meu foco tem sido em desenvolvimento web, mais especificamente com ReactJS e NodeJS, e coloco meus estudos em prática com projetos,
                que eu coloco no meu GitHub.
              </p>
            </span>
          </div>
          <span className={styles.socialNetwork}>
            <Link href="https://www.linkedin.com/in/marcellaamorim/">
              <strong>
                <AiFillLinkedin size={30} />
                LinkedIn
              </strong>
            </Link>
            <Link href="https://github.com/mlasa">
              <strong>
                <AiFillGithub size={30} />
                GitHub
              </strong>
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}
