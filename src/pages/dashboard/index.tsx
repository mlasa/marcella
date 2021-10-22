import { useEffect, useState } from "react"
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
    Stack
} from "@chakra-ui/react"

import styles from './styles.module.scss'

interface IUser {
    _id: string;
    username: string;
    name: string;
    email: string;
}

export default function Home() {
    const router = useRouter()
    const [user, setUser] = useState<IUser>({} as IUser)

    function logOut(): void {
        Cookie.remove('@mlasaPortfolio')
        router.push('/login')
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
    }, [])

    return (
        <>
            <Head>
                <title> Marcella Dev | Dashboard</title>
            </Head>

            <div className={styles.dashboardContainer}>
                <div className={styles.header}>
                    <h1>Olá {user?.name?.split(' ')[0]}</h1>
                    <Button
                        onClick={logOut}
                        size="sm"
                        variant="link"
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

                    <section className={styles.formWrapper}>
                        <div>
                            <form>
                                <Stack spacing={2}>
                                    <Input variant="filled" placeholder="Nome" />
                                    <Input variant="filled" placeholder="Cargo" />
                                    <Textarea
                                        variant="filled"
                                        placeholder="O que mais tem a contar?"
                                    />
                                </Stack>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}