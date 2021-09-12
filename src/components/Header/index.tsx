import styles from './styles.module.scss'

export default function Header(props) {
  return (
    <header
      className={`
      ${styles.headerContainer}
      ${props.class}      
    `}
    >
      <h1>Dev Marcella</h1>
      <div>
        {props.children}
      </div>
    </header>
  )
}