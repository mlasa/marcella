import Head from 'next/head'
import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Button, ButtonGroup } from "@chakra-ui/react"

import { useTheme } from '../hooks/theme'
import styles from '../styles/home.module.scss'

const cv_url = 'https://drive.google.com/file/d/1abSMIAyU9txgVDb8MTBaTq_HKNkABolP/view?usp=sharing'

export default function Home({ profile }) {
  const { globalTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Marcella L.A.S.A.</title>
      </Head>

      <div className={`${styles.containerHome}`}>
        <section className={styles.myPhoto}>
          <img
            className={styles.photo}
            src="https://avatars.githubusercontent.com/u/43733159?s=400&u=44809dcf2f7daef870a8404e63973b5519be6a5a&v=4"
            alt="Foto de Marcella"
          />
        </section>
        <section className={styles.presentation}>
          <h1 className={styles.name}>{profile.name}</h1>
          <h1 className={styles.office}>Front end developer</h1>
        </section>
      </div>
    </>
  )
}

export async function getStaticProps() {

  const response = await fetch('https://mypagemlasa.herokuapp.com/profile', { method: "GET" })
  const data = await response.json()

  return {
    props: {
      profile: data[0]
    }
  }

}
