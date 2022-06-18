import { useEffect, useState, useRef } from "react"
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
	Divider,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalCloseButton,
	ModalContent,
	ModalBody,
	ModalFooter,
	useToast,
	Tag,
	TagLabel,
	TagCloseButton,
	InputGroup
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
	_id: string;
	description: string;
	tags: Array<string>;
	name: string;
	job?: string;
}

export default function Dashboard() {
	const router = useRouter();
	const [user, setUser] = useState<IUser>({} as IUser);
	const [profile, setProfile] = useState<IProfile>({} as IProfile);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [scrollBehavior, setScrollBehavior] = useState('inside');
	const btnRef = useRef(null);
	const [newTag, setNewTag] = useState("");
	const toast = useToast();
	const [errorNewTag, setErrorNewTag] = useState("");

	function logOut(): void {
		Cookie.remove('@mlasaPortfolio')
		router.push('/login')
	}

	async function getUser(): Promise<any> {
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

	function saveNewTag(newTag: string) {
		if (!newTag) {
			setErrorNewTag("Preencha o campo");
			return;
		}
		else {
			setErrorNewTag("");
		}

		setProfile({ ...profile, tags: [...profile.tags, newTag] });

		setNewTag("");
	}

	function saveProfile() {

		const storedInCookiesBrowser = JSON.parse(Cookie.get("@mlasaPortfolio"));

		const config = {
			headers: { authorization: `Bearer ${storedInCookiesBrowser.token}` }
		};


		const body = {
			tags: profile.tags,
			name: profile.name,
			description: profile.description,
			job: profile.job
		}

		api.put(`/profile/${profile._id}`, body, config)
			.then(response => {
				console.log('response: \n', response);

				toast({
					title: "Perfil atualizado!",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
			})
			.catch(error => {
				console.log("Error: ", error);


				toast({
					title: (error.response && error.response.data.message) ?
						error.response.data.errorMessage
						:
						"Não foi possível atualizar...",
					status: "error",
					duration: 9000,
					isClosable: true,
				})
			})
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

			<Modal
				onClose={() => {
					onClose();
					setNewTag("");
				}}
				finalFocusRef={btnRef}
				isOpen={isOpen}
				scrollBehavior="inside"
			//scrollBehavior={scrollBehavior}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Qual será a nova tag?</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Input
							variant="filled"
							placeholder="ex.: Pacote Office"
							value={newTag || ""}
							onChange={(e) => {
								if (errorNewTag && e.target.value) {
									setErrorNewTag("");
								}

								setNewTag(e.target.value);
							}}
						/>
						<small className={styles.errorStyle}>{errorNewTag}</small>
					</ModalBody>
					<ModalFooter>
						<Button size="sm" colorScheme="green" onClick={() => saveNewTag(newTag)}>Adicionar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<div className={styles.dashboardContainer}>
				<div className={styles.header}>
					<h1>Hey {user?.name?.split(' ')[0]}!</h1>
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

					<section className={styles.groupProfile}>
						<Heading size="lg" className={styles.pageTitle}>Edição</Heading>

						<InputGroup size="sm" className={styles.inputGroupProfile}>
							<Heading size="md">Informações da home</Heading>
							<Input variant="filled" placeholder="Nome" value={profile.name || ''} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
							<Input variant="filled" placeholder="Cargo"
								value={profile.job || ""}
								onChange={(e) => {
									if (!profile.hasOwnProperty("job")) {
										Object.assign(profile, { ...profile, job: e.target.value })

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
						</InputGroup>

						<div className={styles.tags}>
							<div className={styles.groupAddTag}>
								<Heading size="md">Palavras chave</Heading>
								<Button
									colorScheme='facebook'
									variant='solid'
									size="md"
									ref={btnRef}
									onClick={onOpen}
								>
									Adicionar
								</Button>
							</div>
							<div className={styles.wrappertags}>
								{
									profile.tags &&
									profile.tags.map((tag, index) => {
										return (
											<Tag
												className={styles.tag}
												size="sm"
												key={index}
												borderRadius='full'
												variant='solid'
												colorScheme='orange'
											>
												<TagLabel>{tag}</TagLabel>
												<TagCloseButton onClick={(e) => removeTag(e, index)} />
											</Tag>
										)
									})
								}
							</div>
						</div>
						{/* <Stack spacing={2}>
							<Input variant="filled" placeholder="Nome" value={profile.name || ''} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
							<Input variant="filled" placeholder="Cargo"
								value={profile.job || ""}
								onChange={(e) => {
									if (!profile.hasOwnProperty("job")) {
										Object.assign(profile, { ...profile, job: e.target.value })

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


							<div className={styles.tags}>
								<div className={styles.groupAddTag}>
									<Heading size="md">Palavras chave</Heading>
									<Button
										colorScheme='facebook'
										variant='solid'
										size="md"
										ref={btnRef}
										onClick={onOpen}
									>
										Adicionar
									</Button>
								</div>
								<div className={styles.wrappertags}>
									{
										profile.tags &&
										profile.tags.map((tag, index) => {
											return (
												<Tag
													className={styles.tag}
													size="sm"
													key={index}
													borderRadius='full'
													variant='solid'
													colorScheme='red'
												>
													<TagLabel>{tag}</TagLabel>
													<TagCloseButton onClick={(e) => removeTag(e, index)} />
												</Tag>
											)
										})
									}
								</div>
							</div>
						</Stack> */}
						<Button colorScheme='green' size='md' onClick={saveProfile}>
							Salvar
						</Button>
					</section>

					{/* <section className={styles.formWrapper}>
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


										<div className={styles.tags}>
											<div className={styles.groupAddTag}>
												<Heading size="md">Palavras chave</Heading>
												<Button
													colorScheme='facebook'
													variant='solid'
													size="md"
													ref={btnRef}
													onClick={onOpen}
												>
													Adicionar
												</Button>
											</div>
											<div className={styles.wrappertags}>
												{
													profile.tags &&
													profile.tags.map((tag, index) => {
														return (
															<Tag
																className={styles.tag}
																size="sm"
																key={index}
																borderRadius='full'
																variant='solid'
																colorScheme='red'
															>
																<TagLabel>{tag}</TagLabel>
																<TagCloseButton onClick={(e) => removeTag(e, index)} />
															</Tag>
														)
													})
												}
											</div>
										</div>
									</Stack>
									<Button colorScheme='green' size='md' onClick={saveProfile}>
										Salvar
									</Button>
								</div>

								<Divider />

								<div className={styles.section}>
									<Heading size="md">Dados de usuário</Heading>
									<Stack spacing={2}>
										<Input variant="filled" placeholder="Usuário" value={user.name || ''} onChange={(e) => setUser({ ...user, name: e.target.value })} />
										<Input variant="filled" placeholder="Usuário" value={user.username || ''} onChange={(e) => setUser({ ...user, username: e.target.value })} />
										<Input variant="filled" placeholder="E-mail" value={user.email || ''} onChange={(e) => setUser({ ...user, email: e.target.value })} />
									</Stack>
								</div>
							</form>
						</div>
					</section> */}

					<small>https://github.com/mlasa/front/</small>
				</div>

			</div >
		</>
	)
}