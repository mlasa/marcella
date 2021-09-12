import { Button } from "@chakra-ui/react"
import Link from 'next/link'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react"

import styles from './styles.module.scss'

export default function Header(props) {
  console.log(`Props ${props.children}`)

  return (
    <>
      <header
        className={`
        ${styles.headerContainer}
        ${props.class}      
    `}
      >
        <h1>Developer</h1>
        <div className={styles.linksTabs}>
          <p>
            <Link href="/sobre">Sobre</Link>
          </p>
          <p>
            <Link href="/experiencias">Experiências</Link>
          </p>
        </div>
        <Popover>
          <PopoverTrigger>
            <Button colorScheme="yellow" variant="outline">
              Fale comigo
            </Button>
          </PopoverTrigger>
          <PopoverContent className={styles.popoverContent}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Use este e-mail!</PopoverHeader>
            <PopoverBody>marcella.amorimsa@gmail.com</PopoverBody>
          </PopoverContent>
        </Popover>
      </header>
    </>
  )
}