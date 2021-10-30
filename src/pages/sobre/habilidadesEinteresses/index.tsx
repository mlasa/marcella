import { Heading } from "@chakra-ui/react"
import { BsGithub } from 'react-icons/bs'
import { IoLogoBitbucket, IoLogoJavascript } from 'react-icons/io'
import { DiGit, DiReact } from 'react-icons/di'
import { FaNode } from 'react-icons/fa'
import { SiTypescript, SiHtml5, SiCss3 } from 'react-icons/si'

import styles from './styles.module.scss'

export default function SkillsAndInterests() {
	return (
		<main className={styles.skillsAndInterestsContainer}>
			<div className={styles.positionSkillsAndInterests}>
				<div className={styles.skillsWrapper}>
					<section className={styles.techSkills}>
						<Heading size="lg" className={styles.sectionTitle} >Habilidades</Heading>


						<div className={styles.skills}>
							<p className={styles.wrapperBorderSkill}>
								<p className={styles.contentSkill}>
									<SiCss3 color="inhearit" size='2rem' />
								</p>
							</p>

							<p className={styles.wrapperBorderSkill}>
								<p className={styles.contentSkill}>
									<SiHtml5 color="inhearit" size='2rem' />
								</p>
							</p>

							<p className={styles.wrapperBorderSkill}>
								<p className={styles.contentSkill}>
									<IoLogoJavascript color="inhearit" size='2rem' />
								</p>
							</p>

							<p className={styles.wrapperBorderSkill}>
								<p className={styles.contentSkill}>
									<DiReact color="inhearit" size='2rem' />
								</p>
							</p>

							<p className={styles.wrapperBorderSkill}>
								<p className={styles.contentSkill}>
									<SiTypescript color="inhearit" size='2rem' />
								</p>
							</p>

							<p className={styles.wrapperBorderSkill}>
								<p className={styles.contentSkill}>
									<FaNode color="inhearit" size='2rem' />
								</p>
							</p>

							<p className={styles.wrapperBorderSkill}>
								<p className={styles.contentSkill}>
									<DiGit color="inhearit" size='2rem' />
								</p>
							</p>

							<p className={styles.wrapperBorderSkill}>
								<p className={styles.contentSkill}>
									<BsGithub color="inhearit" size='2rem' />
								</p>
							</p>

							<p className={styles.wrapperBorderSkill}>
								<p className={styles.contentSkill}>
									<IoLogoBitbucket color="inhearit" size='2rem' />
								</p>
							</p>
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