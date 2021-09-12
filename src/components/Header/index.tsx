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
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  IconButton
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { useMediaQuery } from "@chakra-ui/react"

import styles from './styles.module.scss'

export default function Header() {
  const [isLargerThan750px] = useMediaQuery("(min-width: 750px)")


  return (
    <>
      <header
        className={`
        ${styles.headerContainer}  
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
                style={{ background: 'transparent' }}
              />
              <MenuList>
                <div className={styles.menuList}>
                  <MenuItem>
                    <Link href="/sobre">Sobre</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/experiencias">Experiências</Link>
                  </MenuItem>
                </div>
              </MenuList>
            </Menu>
          </div>
        }
        <h1>Developer</h1>
        <div className={styles.linksTabs}>
          {isLargerThan750px &&
            <>
              <p>
                <Link href="/sobre">Sobre</Link>
              </p>
              <p>
                <Link href="/experiencias">Experiências</Link>
              </p>
            </>
          }
        </div>
        <Popover>
          <PopoverTrigger>
            <a href="#" className={styles.neonLink}>
              <Button
                colorScheme="yellow"
                variant="outline"
                style={{
                  background: 'transparent',
                  borderColor: 'transparent'
                }}
              >
                Fale comigo
              </Button>
            </a>
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