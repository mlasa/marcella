import Link from 'next/link'
import { Heading } from '@chakra-ui/layout'
import Header from '../../components/Header'
import SkillsAndInterests from './habilidadesEinteresses'
import styles from './styles.module.scss'

export default function Sobre() {
	return (
		<>
			<main className={styles.aboutContainer}>
				<Header />

				<div className={styles.aboutPosition}>

					<div className={styles.aboutContentWrapper}>

						<section className={styles.introduction}>
							<p>
								Olá, bem vindo(a) ao meu portfólio! Espero que você possa conhecer um pouco mais sobre mim aqui.
							</p>
							<p>
								Me chamo <span className={styles.highlightWords}>Marcella Letícia</span>, e moro em  <span className={styles.highlightWords}>Campinas</span>, São Paulo.
								Sou formada no curso bacharel em  <span className={styles.highlightWords}>Sistemas de Informação </span>
								pela PUC-Campinas, me formei em dezembro de 2020. E no momento o assunto que mais me desperta interesse é <span className={styles.highlightWords}>programação</span>.
							</p>
						</section>

						<section className={styles.description}>
							<Heading size="lg" className={styles.sectionTitle}>Um pouquinho mais sobre mim</Heading>
							<p>
								Sou uma pessoa	 muito dedicada às coisas que gosto, e também muito impulsionada pela curiosidade e vontade de aprender
								coisas novas, ainda mais quando se trata de tecnologia, que é um dos meus assuntos favoritos.
								Tecnologia é sim um dos assuntos mais fascinantes para mim, mas não é o único que me interessa, sou alguém que gosta de
								conhecer coisas diferentes, coisas como: História, Arte, finanças, sociologia, entre outros.

								A programação para mim surgiu como mais uma das cargas horárias que eu precisava cumprir para a faculdade, e também mais um
								desafio a ser superado, pois eu pensava que não era para mim. Isso só mudou quando tive contato com a programação Web e mais
								especificamente com o front end. Eu gostava por ser mais visual, e ao mesmo tempo tinha pessoas ao meu redor que me incentivavam
								e gostavam do que eu conseguia fazer na época.

								Eu continuei estudando sozinha, e um dia comecei a estudar back end também, e eu percebi que é tão legal quanto front end, é
								"fazer as coisas funcionarem!".
							</p>
						</section>

					</div>
				</div>
			</main >
			<SkillsAndInterests />

		</>
	)
}