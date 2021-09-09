import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/home.module.scss'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { useTheme } from '../hooks/theme'

const cv_url = 'https://drive.google.com/file/d/1abSMIAyU9txgVDb8MTBaTq_HKNkABolP/view?usp=sharing'

export default function Home({ profile }) {
  const { globalTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Marcella L.A.S.A.</title>
      </Head>

      <div className={`${styles.container} ${styles[globalTheme]}`}>
        <div className={`${styles.main} ${styles[globalTheme]}`}>
          <div className={styles.me}>
            <img
              src="https://avatars.githubusercontent.com/u/43733159?s=400&u=44809dcf2f7daef870a8404e63973b5519be6a5a&v=4"
              alt="Foto de Marcella" />
            <h2>{profile.name}</h2>
            <div>
              {
                profile.tags.map(tag => <strong key={tag} className={styles[globalTheme]}>{tag}</strong>)
              }
            </div>
            <span>
              <p>
                {profile.description}
              </p>
              {/*<strong className={`${styles[globalTheme]}`}>
                <a href={cv_url} rel="external">Baixar currículo em PDF</a>
            </strong>*/}
            </span>
          </div>
          <span className={`${styles.socialNetwork} ${styles[globalTheme]}`}>
            <Link href="https://www.linkedin.com/in/marcellaamorim/">
              <strong className={`${styles[globalTheme]}`}>
                <AiFillLinkedin size={30} />
                LinkedIn
              </strong>
            </Link>
            <Link href="https://github.com/mlasa">
              <strong className={`${styles[globalTheme]}`}>
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

export async function getStaticProps() {

  const response = await fetch('https://mypagemlasa.herokuapp.com/profile', { method: "GET" })
  const data = await response.json()

  console.log(data)

  return {
    props: {
      profile: data[0]
    }
  }

}
