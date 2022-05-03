import styles from './styles.module.scss';

export default function Loading() {
	return (
		<>
			<div className={styles.loading}></div>
			<small>Carregando ...</small>
		</>
	);
}