import Header from '../../components/Header'
import styles from './styles.module.scss'


export default function Experience() {
	return (
		<main className={styles.experienciesContainer}>
			<Header />
			<div className={styles.positionExperiencesContainer}>
				<div className={styles.experiencesContentWrapper}>
					<h1>Experiências [ em deselvolvimento ]</h1>
				</div>
			</div>
		</main>
	)
}