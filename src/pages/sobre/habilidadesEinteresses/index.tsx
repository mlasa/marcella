import { useState } from 'react'
import { Heading } from "@chakra-ui/react"
import { BsGithub } from 'react-icons/bs'
import { IoLogoBitbucket, IoLogoJavascript } from 'react-icons/io'
import { DiGit, DiReact } from 'react-icons/di'
import { FaNode } from 'react-icons/fa'
import { SiTypescript, SiHtml5, SiCss3 } from 'react-icons/si'

import styles from './styles.module.scss'
import { IconType } from 'react-icons'

interface ITechSkills {
	label: string;
	CustomTag: IconType;
}

export default function SkillsAndInterests() {
	const [activeLegend, setActiveLegend] = useState('')
	const [techSkills, setTechSkills] = useState<ITechSkills[]>([
		{
			label: 'CSS',
			CustomTag: SiCss3
		},
		{
			label: 'HTML',
			CustomTag: SiHtml5
		},
		{
			label: 'JavaScript',
			CustomTag: IoLogoJavascript
		},
		{
			label: 'React.js',
			CustomTag: DiReact
		},
		{
			label: 'TypeScript',
			CustomTag: SiTypescript
		},
		{
			label: 'Node.js',
			CustomTag: FaNode
		},
		{
			label: 'Git',
			CustomTag: DiGit
		},
		{
			label: 'GitHub',
			CustomTag: BsGithub
		},
		{
			label: 'Bitbucket',
			CustomTag: IoLogoBitbucket
		}
	])

	return (
		<main className={styles.skillsAndInterestsContainer}>
			<div className={styles.positionSkillsAndInterests}>
				<div className={styles.skillsWrapper}>
					<section className={styles.techSkills}>
						<Heading size="lg" className={styles.sectionTitle} >Habilidades</Heading>


						<div className={styles.skills}>
							{
								techSkills.map(({ label, CustomTag }, index) =>
									<div className={styles.skilldiv}>
										{activeLegend === label && <small className={styles.legend}>{label}</small>}
										<section className={styles.wrapperBorderSkill}
											onMouseLeave={() => setActiveLegend('')}
											onMouseOver={() => setActiveLegend(label)}
											key={index}
										>
											<p className={styles.contentSkill}>
												<CustomTag color="inhearit" size='2rem' />
											</p>
										</section>
									</div>

								)
							}

						</div>

					</section>
					<section className={styles.interests}>
						<Heading size="lg" className={styles.sectionTitle} style={{ textAlign: 'center' }}>Outros interesses</Heading>
						<ul>
							<li>User Interface - UI</li>
							<li>User experience - UX</li>
							<li>Back end</li>
						</ul>
					</section>
				</div>
			</div>
		</main>
	)
}