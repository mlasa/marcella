import { Button } from "@chakra-ui/react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react"

import styles from './styles.module.scss'

export default function Header(props) {
  return (
    <>
      <header
        className={`
      ${styles.headerContainer}
      ${props.class}      
    `}
      >
        <h1>Developer</h1>
        <div>
          {props.children}
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
            <PopoverHeader colorScheme="black">Use este e-mail!</PopoverHeader>
            <PopoverBody>marcella.amorimsa@gmail.com</PopoverBody>
          </PopoverContent>
        </Popover>
      </header>
    </>
  )
}