import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './styles.module.scss'

interface IProps {
	to: String;
	label: String;
}

export function NavLink({ to, label }: IProps) {
	const router = useRouter()
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		setIsActive(router.route === to);
	}, [])

	return (
		<nav className={`${isActive && styles.active} ${styles.nav}`}>
			<Link href={`${to}`}>
				{label}
			</Link>
		</nav>
	);
}