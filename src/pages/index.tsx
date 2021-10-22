import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Badge } from "@chakra-ui/react"

import { useMediaQuery } from "@chakra-ui/react"

import { useTheme } from '../hooks/theme'
import styles from '../styles/home.module.scss'
import Header from '../components/Header'

const cv_url = 'https://drive.google.com/file/d/1abSMIAyU9txgVDb8MTBaTq_HKNkABolP/view?usp=sharing'

export default function Home({ profile }) {
	const { globalTheme } = useTheme()
	const [isLargerThan750px] = useMediaQuery("(min-width: 750px)")
	const [isWideScreen, setIsWideScreen] = useState(false);

	useEffect(() => setIsWideScreen(isLargerThan750px), [isLargerThan750px])


	return (
		<div className={`${styles.containerHome}`}>
			<Head>
				<title> Marcella Dev | Welcome</title>
			</Head>
			{<Header class={styles.header} />}

			<div className={`
				${isWideScreen ? styles.content : styles.contentMobile}
			`}>
				<section className={`${isWideScreen ? styles.me : styles.meMobile}`}>
					<img
						className={`${isWideScreen ? styles.photo : styles.photoMobile}`}
						src="meOut2021-cut.png"
						alt="Foto de Marcella"
					/>
				</section>

				<section className={`${styles.texts}`}>
					<h2>Olá,</h2>
					<h1>sou a
						<span className={styles.nameHighlight}>
							Marcella
							<span>Front end developer</span>
						</span>
					</h1>

					<div className={styles.skills}>
						{profile.tags.map(skill =>
							<Badge key={skill} fontSize="sm" colorScheme="green" className={styles.skill}>{skill}</Badge>
						)}
					</div>
				</section>
			</div>
		</div>
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
