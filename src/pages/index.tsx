import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Heading } from "@chakra-ui/react"
import {
  Tag
} from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"

import { useTheme } from '../hooks/theme'
import styles from '../styles/home.module.scss'
import Header from '../components/Header'

const cv_url = 'https://drive.google.com/file/d/1abSMIAyU9txgVDb8MTBaTq_HKNkABolP/view?usp=sharing'

export default function Home({ profile }) {
  const { globalTheme } = useTheme()
  const [auxTags, setAuxTags] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isLargerThan750px] = useMediaQuery("(min-width: 750px)")


  function renderSkillsTags() {
    setTimeout(() => {
      let count = counter;
      if (
        count === 0 ||
        count < profile.tags.length
      ) {
        setCounter(counter + 1)
        setAuxTags([...auxTags, profile.tags[count]])
        count++
      }
    }, 350)
  }

  renderSkillsTags()


  return (
    <>
      <Head>
        <title>Marcella L.A.S.A.</title>
      </Head>

      <div className={`${styles.containerHome}`}>
        {<Header class={styles.header} />}
        <div className={styles.layerHome}>
          <section className={styles.presentation}>
            <section className={styles.myPhoto}>
              <img
                className={styles.photo}
                src="https://avatars.githubusercontent.com/u/43733159?s=400&u=44809dcf2f7daef870a8404e63973b5519be6a5a&v=4"
                alt="Foto de Marcella"
              />
            </section>
            <Heading
              size="xl"
              className={styles.name}
            >{profile.name}</Heading>
            <Heading
              size="md"
              className={styles.office}
            >
              Front end developer
            </Heading>
          </section>
          <section className={styles.skills}>
            {isLargerThan750px &&
              auxTags.map((tag, index) =>
                <Tag
                  size="lg"
                  variant="outline"
                  key={index}
                  className={styles.skill}
                >
                  {tag}
                </Tag>
              )
            }
          </section>
        </div>
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
