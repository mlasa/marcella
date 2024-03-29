import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Heading, Input, Button, useToast } from "@chakra-ui/react"
import Cookie from 'js-cookie'
import { addDays } from 'date-fns'

import styles from './styles.module.scss'
import api from '../../services/api'

export default function Login() {
	const [password, setPassword] = useState('')
	const [access, setAccess] = useState('')
	const router = useRouter()
	const toast = useToast()

	function saveUserLogged(token, user): void {
		Cookie.set('@mlasaPortfolio', JSON.stringify({ token, user }), {
			expires: addDays(new Date(), 1)
		})
	}

	function login(access, password): void {

		!access && !password &&
			toast({
				title: "Você precisa informar as credenciais",
				description: "Preecha senha e e-mail",
				status: "error",
				duration: 9000,
				isClosable: true,
			})


		api.post('/session', { email: access, username: access, password: password })
			.then(response => {
				const { token, user } = response.data

				if (token && user) {
					saveUserLogged(token, user)
					router.push('/admin')
				}


				toast({
					title: "Login feito com sucesso",
					status: "success",
					duration: 9000,
					isClosable: true,
				})
			})
			.catch(error => {
				console.log(error)
				toast({
					title: error.response ? error.response.data.errorMessage : "Erro",
					status: "error",
					duration: 9000,
					isClosable: true,
				})
			})
	}

	function checkIfUserIsLogged(): Boolean {
		const userLoggedIn = Cookie.get('@mlasaPortfolio')

		if (userLoggedIn)
			return true
		else return false
	}

	useEffect(() => {
		if (checkIfUserIsLogged())
			router.push('/admin')
	}, [])

	return (
		<>
			<Head>
				<title> Marcella Dev | Login</title>
			</Head>

			<div className={styles.loginContainer}>
				<section className={`${styles.sectionLogin}`}>

					<Heading size="lg">Admin</Heading>
					<div className={styles.boxLogin}>
						<Input
							value={access}
							variant="outline"
							placeholder="E-mail ou nome de usuário"
							onChange={(event) => setAccess(event.target.value)}
							autoFocus={true}
						/>
						<Input
							value={password}
							variant="outline"
							type="password"
							placeholder="*****"
							onChange={(event) => setPassword(event.target.value)}
						/>
						{access && password ?
							<Button
								onClick={() => login(access, password)}
								colorScheme="cyan"
							>
								Entrar
							</Button>
							:
							<Button disabled colorScheme="cyan">Entrar</Button>
						}
					</div>

				</section>
			</div >
		</>
	)
}