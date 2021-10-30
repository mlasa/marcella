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
	Button
} from "@chakra-ui/react"
import { HamburgerIcon, CopyIcon, LinkIcon } from "@chakra-ui/icons"

import styles from './styles.module.scss'

export default function Header(props) {
	const [isLargerThan750px] = useMediaQuery("(min-width: 750px)")
	const toast = useToast()


	function copyToClipboard() {

		navigator.clipboard.writeText('marcella.amorimsa@gmail.com')

		toast({
			title: "E-mail copiado! ",
			status: "success",
			duration: 2000,
		})
	}

	return (
		<header className={`
				${styles.headerContainer}
				${props.class}
			`}
		>{!isLargerThan750px &&
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
							<MenuItem> <Link href="/sobre">Sobre</Link></MenuItem>
							<MenuItem> <Link href="/experiencias">Experiências</Link></MenuItem>
						</div>
					</MenuList>
				</Menu>
			</div>
			}

			<Link href="/">
				{
					isLargerThan750px ?
						<h1 className={styles.mark}>Developer</h1>
						:
						<h1 className={styles.mark}>Dev</h1>

				}
			</Link>
			<div className={styles.linksTabs}>
				{
					isLargerThan750px &&
					<>
						<p>
							<Link href="/sobre">Sobre mim</Link>
						</p>
						<p>
							<Link href="/experiencias">Experiências</Link>
						</p>
					</>
				}
			</div>

			<Popover
				styleConfig={{
					border: "none"
				}}
			>
				<PopoverTrigger>
					<Button
						borderColor="#a77fe9"
						variant="outline"
						_hover={{
							background: "#956dd4",
						}}
					>Contato</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className={styles.popoverContent}>
						<PopoverArrow />
						<PopoverCloseButton />
						<PopoverHeader className={styles.popoverHeader}>
							Estou disponível por:
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
		</header>
	)
}