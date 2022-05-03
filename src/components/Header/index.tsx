import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
	Icon,
	useMediaQuery,
	useToast,
	Button,
	Select
} from "@chakra-ui/react"
import { HamburgerIcon, CopyIcon, LinkIcon } from "@chakra-ui/icons"
import { FaRegHandPeace } from 'react-icons/fa'

import styles from './styles.module.scss'
import { NavLink } from '../NavLink'
import { translater } from '../../components/Translater'

export default function Header(props) {
	const [isLargerThan750px] = useMediaQuery("(min-width: 750px)")
	const toast = useToast()
	const [language, setLanguage] = useState('portuguese');


	function copyToClipboard() {

		navigator.clipboard.writeText('marcella.amorimsa@gmail.com')

		toast({
			title: "E-mail copiado! ",
			status: "success",
			duration: 2000,
		})
	}

	useEffect(() => {
		if (localStorage.getItem("@marcella-portfolio/language")) {
			setLanguage(localStorage.getItem("@marcella-portfolio/language").toString());
		}
	}, [])

	return (
		<header
			className={`
				${styles.headerContainer}
				${props.class}
			`}
		>
			{
				!isLargerThan750px &&
				<div className={styles.menuHamburger}>
					<Menu isLazy>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							icon={<HamburgerIcon />}
							variant="outline"
							_hover={{
								background: "none"
							}}
						/>
						<MenuList>
							<div className={styles.menuList}>
								<MenuItem>
									<NavLink to="/sobre" label="Sobre" />
								</MenuItem>
								<MenuItem>
									<NavLink to="/experiencias" label="Experiências" />
								</MenuItem>
							</div>
						</MenuList>
					</Menu>
				</div>
			}

			<Link href="/">
				{
					isLargerThan750px ?
						<>
							<FaRegHandPeace size={20} />
							<h1 className={styles.mark}>
								Marcella
							</h1>
						</>
						:
						<h1 className={styles.mark}>Dev</h1>
				}
			</Link>

			<div className={styles.linksTabs}>
				{
					isLargerThan750px &&
					<ul>
						<li>
							<NavLink to="/sobre" label="Sobre" />
						</li>
						<li>
							<NavLink to="/experiencias" label="Experiências" />
						</li>
					</ul>
				}
			</div>

			<Popover
				styleConfig={{
					border: "none"
				}}
			>
				<PopoverTrigger>
					<Button
						borderColor="#f8a6f8"
						variant="outline"
						_hover={{
							background: "#f8a6f8",
						}}
					>Contato</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className={styles.popoverContent}>
						<PopoverArrow />
						<PopoverCloseButton />
						<PopoverHeader className={styles.popoverHeader}>
							{translater("available-contact")}
						</PopoverHeader>
						<PopoverBody className={styles.popoverBody}>
							<section className={styles.listSection}>
								<span onClick={copyToClipboard}>
									<Icon as={CopyIcon} />
									<p>
										E-mail: marcella.amorimsa@gmail.com
									</p>
								</span>
								<span>
									<Icon as={LinkIcon} />
									<p>
										<Link href="https://www.linkedin.com/in/marcellaamorim/">Acessar LinkedIn</Link>
									</p>
								</span>
							</section>
						</PopoverBody>
					</div>
				</PopoverContent>
			</Popover>

			<div style={{ width: "100px", marginLeft: "3rem" }}>
				<Select placeholder='Idioma' variant='filled' color="black"
					_hover={{
						background: "white",
					}}

					onChange={(e) => {
						console.log("opa: ", e);
						setLanguage(e.target.value);

						localStorage.setItem("@marcella-portfolio/language", e.target.value);
					}}
					value={language}
				>
					<option value='english'>English</option>
					<option value='portuguese'>Português</option>
				</Select>
			</div>
		</header >
	)
}