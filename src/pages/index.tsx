import { useEffect, useState } from 'react'
import Head from 'next/head'

import { useMediaQuery } from "@chakra-ui/react"

import styles from '../styles/home.module.scss'
import Header from '../components/Header'
import { Error } from '../components/Error'
import { translater } from '../components/Translater'

export default function Home({ profile }) {
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
								{translater("page-bein-updated")}
							</span>
							<span className={styles.tag}>
								{translater("tag-introduce")}
								<img src="flag-brazil.png" alt="Bandeira do Brasil" width="30px" style={{ margin: '0 .5rem' }} />
							</span>

							<header className={styles.headerMe}>
								<span>
									<h1>{profile.name}</h1>
									<p>Fullstack developer - Cesla ( WS Solution )</p>
								</span>
								<img src="me1.jpeg" alt="Marcella" width="200px" style={{ borderRadius: "100px" }} />
							</header>

							<div className={styles.more}>
								<section>
									{/* <h1>{translater("work")}</h1> */}
									<p>{translater("more-me")}</p>
								</section>

								<section>
									<h1 className={styles.titleSection}>{translater("work")}</h1>
									<p>{translater("job")}</p>
								</section>

								<section>
									<h1 className={styles.titleSection}>{translater("background")}</h1>
									<p>{translater("background-text")}</p>
								</section>

								<section>
									<h1 className={styles.titleSection}>{translater("i-like")}</h1>
									<p>{translater("i-like-text")}</p>
								</section>
							</div>
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
			return {
				props: {
					profile: data[0]
				},
				/* revalidate: 60 * 60 * 24 */ /* 24 em 24 horas - 1 vez por dia*/
				revalidate: 60 * 60 * 6 /* 6 em 6 horas*/
			}
		}

	} catch (error) {
		console.log("Erro: \n", error, '\n');

		return {
			props: {
				notFound: true
			},
			/* revalidate: 60 * 60 * 24 */ /* 24 em 24 horas - 1 vez por dia*/
			revalidate: 60 * 60 * 6 /* 6 em 6 horas*/
		}
	}


}
