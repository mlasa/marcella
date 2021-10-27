import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Heading, Input, Button, useToast } from "@chakra-ui/react"
import Cookie from 'js-cookie'
import { addDays } from 'date-fns'

import styles from './styles.module.scss'
import api from '../../services/api'

export default function Login() {
    console.log('Teste')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const router = useRouter()

    const toast = useToast()


    function saveUserLogged(token, user): void {
        Cookie.set('@mlasaPortfolio', JSON.stringify({ token, user }), {
            expires: addDays(new Date(), 1)
        })
    }

    function login(email, password): void {

        !email && !password &&
            toast({
                title: "Você precisa informar as credenciais",
                description: "Preecha senha e e-mail",
                status: "error",
                duration: 9000,
                isClosable: true,
            })


        api.post('/session', { email: email, password: password })
            .then(response => {
                const { token, user } = response.data

                if (token && user) {
                    saveUserLogged(token, user)
                    router.push('/dashboard')
                }


                toast({
                    title: "Login feito com sucesso",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            })
            .catch(error => {
                console.log(error)
                toast({
                    title: error.response.data.errorMessage,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            })
    }

    function checkIfUserIsLogged(): Boolean {
        const userLoggedIn = Cookie.get('@mlasaPortfolio')

        if (userLoggedIn)
            return true
        else return false
    }

    useEffect(() => {
        if (checkIfUserIsLogged())
            router.push('/dashboard')
    }, [])

    return (
        <>
            <Head>
                <title> Marcella Dev | Login</title>
            </Head>

            <div className={styles.loginContainer}>
                <section className={styles.sectionLogin}>
                    <Heading size="lg">Acesso</Heading>
                    <div className={styles.boxLogin}>
                        <Input
                            value={email}
                            variant="filled"
                            placeholder="E-mail ou nome de usuário"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <Input
                            value={password}
                            variant="filled"
                            type="password"
                            placeholder="*****"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {email && password ?
                            <Button
                                onClick={() => login(email, password)}
                                colorScheme="yellow"
                            >
                                Entrar
                            </Button>
                            :
                            <Button disabled colorScheme="yellow">Entrar</Button>
                        }
                    </div>
                </section>
            </div >
        </>
    )
}