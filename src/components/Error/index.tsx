import styles from './styles.module.scss';

type IError = {
	message?: string;
	title?: string;
}

export function Error(props: IError) {
	return (
		<div className={styles.errorData} style={{ opacity: 1 }}>
			{
				!props.title ?
					<h1>Erro(</h1>
					:
					<h1>{props.title}</h1>
			}
			{
				props.message ?
					<p>{props.message}</p>
					:
					<p>Algo de errado aconteceu...vou checar oque houve</p>
			}

			{/* <button onClick={fetchShowData}>Tentar novamente</button> */}
		</div>
	);
}