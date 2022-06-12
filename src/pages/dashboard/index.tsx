import { useEffect, useState } from "react"
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookie from "js-cookie"
import {
	Button,
	UnorderedList,
	ListItem,
	Input,
	Textarea,
	Stack,
	Heading,
	Divider
} from "@chakra-ui/react";

import api from "../../services/api";
import styles from './styles.module.scss';

interface IUser {
	_id: string;
	username: string;
	name: string;
	email: string;
}

interface IProfile {
	description: string;
	tags: Array<string>;
	name: string;
	job?: string;
}

export default function Dashboard() {
	const router = useRouter()
	const [user, setUser] = useState<IUser>({} as IUser)
	const [profile, setProfile] = useState<IProfile>({} as IProfile);
	console.log('profile: ', profile);

	function logOut(): void {
		Cookie.remove('@mlasaPortfolio')
		router.push('/login')
	}

	async function getUser(): any {
		const responseRaw = await api({
			url: "/profile",
			method: "GET"
		})
		return responseRaw.data
	}

	function removeTag(e, indexTag) {
		e.preventDefault()

		const newArray = profile.tags.filter((tag, index) => index !== indexTag)
		setProfile({ ...profile, tags: newArray });
	}

	// Will check if user is already logged in by client side
	useEffect(() => {
		const userLoggedIn = Cookie.get('@mlasaPortfolio')

		if (!userLoggedIn) {
			router.push('/login')
		}
		else {
			setUser(JSON.parse(userLoggedIn).user)
		}

		getUser().then(response => {
			response && setProfile(response[0]);
		});


	}, [])

	return (
		<>
			<Head>
				<title> Marcella Dev | Dashboard</title>
			</Head>

			<div className={styles.dashboardContainer}>
				<div className={styles.header}>
					<h1>Olá {user?.name?.split(' ')[0]}</h1>
					<Button
						onClick={logOut}
						size="sm"
						colorScheme='red'
					>Sair</Button>
				</div>

				<div className={styles.wrapperContent}>
					<section className={styles.listSection}>
						<UnorderedList className={styles.list}>
							<ListItem>Editar informações do portfólio</ListItem>
							<ListItem>
								<Link href="/">Ver portfólio</Link>
							</ListItem>
						</UnorderedList>
					</section>

					<section className={styles.formWrapper}>
						<div>
							<form>
								<div className={styles.section}>
									<Heading size="md">Informações da home</Heading>
									<Stack spacing={2}>
										<Input variant="filled" placeholder="Nome" value={profile.name || ''} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
										<Input variant="filled" placeholder="Cargo"
											value={profile.job || ""}
											onChange={(e) => {
												if (!profile.hasOwnProperty("job")) {
													Object.assign(profile, { ...profile, job: e.target.value })
													console.log('profile: ', profile);

												} else {
													setProfile({ ...profile, job: e.target.value })
												}

											}}
										/>
										<Textarea
											variant="filled"
											placeholder='Descrição'
											size='sm'
											onChange={(e) => setProfile({ ...profile, description: e.target.value })}
											value={profile.description || ""}
										/>

										{/* <Button colorScheme='green' size='md'>
												Salvar
											</Button> */}
										<Divider />
										<div className={styles.tags}>
											<Heading size="md">Palavras chave</Heading>
											<div className={styles.wrappertags}>
												{
													profile.tags &&
													profile.tags.map((tag, index) => {
														return <div key={`${tag}${index}`} className={styles.tag}>
															<p>{tag}</p>
															<button type="button" onClick={(e) => removeTag(e, index)}>X</button>
														</div>;
													})
												}
											</div>
										</div>
									</Stack>
								</div>

								<Divider />

								<div className={styles.section}>
									<Heading size="md">Dados de usuário</Heading>
									<Stack spacing={2}>
										<Input variant="filled" placeholder="Usuário" value={user.name || ''} onChange={(e) => setUser({ ...user, name: e.target.value })} />
										<Input variant="filled" placeholder="Usuário" value={user.username || ''} onChange={(e) => setUser({ ...user, username: e.target.value })} />
										<Input variant="filled" placeholder="E-mail" value={user.email || ''} onChange={(e) => setUser({ ...user, email: e.target.value })} />
										{/* <Input variant="filled" placeholder="Nova senha" value={''} /> */}
										{/* <Button colorScheme='green' size='md'>
											Salvar
										</Button> */}
									</Stack>
								</div>
							</form>
						</div>
					</section>
					<small>https://github.com/mlasa/front/</small>
				</div>

			</div >
		</>
	)
}