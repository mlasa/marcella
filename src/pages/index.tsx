import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Badge } from "@chakra-ui/react"

import { useMediaQuery } from "@chakra-ui/react"

import styles from '../styles/home.module.scss'
import Header from '../components/Header'
import { Error } from '../components/Error'

export default function Home({ profile }) {
	console.log('profile: ', profile);
	const [isLargerThan750px] = useMediaQuery("(min-width: 750px)")
	const [isWideScreen, setIsWideScreen] = useState(false);

	//useEffect(() => setIsWideScreen(isLargerThan750px), [isLargerThan750px])

	return (
		<>
			{profile ?
				<div className={`${styles.containerHome}`}>
					<Head>
						<title> Marcella Amorim S.A. - Homepage</title>
					</Head>
					<Header class={styles.header} />

					<div className={styles.content} >
						<div className={styles.contentWrapper}>
							<span className={styles.tag}>
								🚧 Essa página está sendo atualizada 👷‍♀️
							</span>
							<span className={styles.tag}>
								Olá, sou uma desenvolvedora full-stack em Campinas - SP - Brasil
								<img src="flag-brazil.png" alt="Bandeira do Brasil" width="30px" style={{ margin: '0 .5rem' }} /> !
							</span>

							<header className={styles.headerMe}>
								<span>
									<h1>{profile.name}</h1>
									<p>Fullstack developer - Cesla ( WS Solution )</p>
								</span>
								<img src="me1.jpeg" alt="Marcella" width="200px" style={{ borderRadius: "100px" }} />
							</header>
						</div>
					</div>


				</div>
				:
				<Error title="Oh não 😔" message="Não foi possível recuperar os dados" />
			}
		</>
	)
}

export async function getStaticProps() {

	try {
		const response = await fetch('https://mypagemlasa.herokuapp.com/profile', { method: "GET" })
		const data = await response.json()

		if (data[0]) {
			console.log("Entrei nesse");
			return {
				props: {
					profile: data[0]
				},
				revalidate: 60 * 60 * 24
			}
		} else {
			console.log("Não, nesse");
			return {
				props: {
					profile: {}
				},
				revalidate: 60 * 60 * 24
			}
		}
	} catch (error) {
		console.log("Deu boa não: \n", error, '\n');

		return {
			props: {
				notFound: true
			},
			revalidate: 60 * 60 * 24
		}
	}


}
