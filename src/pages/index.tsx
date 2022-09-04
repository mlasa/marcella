import { useEffect, useState } from 'react'
import Head from 'next/head'

import { useToast } from "@chakra-ui/react"

import styles from '../styles/home.module.scss'
import Header from '../components/Header'
import { Error } from '../components/Error'
import { translater } from '../components/Translater'


export default function Home({ profile }) {
	const toast = useToast()

	/*const [isLargerThan750px] = useMediaQuery("(min-width: 750px)")
	const [isWideScreen, setIsWideScreen] = useState(false);*/

	//useEffect(() => setIsWideScreen(isLargerThan750px), [isLargerThan750px])

	let language;
	let isLanguagePTBR = (language && language == "portuguese") ? true : false;

	if (typeof window !== 'undefined') {
		language = localStorage.getItem("@marcella-homepage/language");
		isLanguagePTBR = (language && language == "portuguese") ? true : false;
	} else {
		console.log('we are running on the server');
	}

	function copyToClipboard() {

		navigator.clipboard.writeText('marcella.amorimsa@gmail.com')

		toast({
			title: "E-mail copiado para área de transferência! ",
			status: "success",
			duration: 2000,
		})
	}

	return (
		<>
			{profile ?
				<section className={`${styles.home} container`}>
					<div className={styles.photo}>
						<img src="me1.jpeg" alt="Marcella" width="250px" style={{ borderRadius: "100px" }} />
					</div>
					<div className={styles.introdution}>
						<h2>Programadora</h2>
						<h1>Marcella Amorim S.A.</h1>
						<div className="cta-home-buttons">
							<a href="https://www.linkedin.com/in/marcellaamorim/">LinkedIn</a>
							<button onClick={() => copyToClipboard()}>Contato</button>
						</div>
					</div>
				</section>
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
