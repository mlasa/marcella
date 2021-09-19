import { useState } from 'react'
import styles from './styles.module.scss'
import { Heading, Input, Button, useToast } from "@chakra-ui/react"


export default function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [error, setError] = useState('')

    const toast = useToast()

    function saveUserLogged(token, user) {
        localStorage.setItem('@mlasaPortfolio', JSON.stringify({ token, user }))
    }

    function login(email, password) {

        !email && !password &&
            toast({
                title: "Poxa, não deu pra fazer login",
                description: "Preecha senha e e-mail",
                status: "error",
                duration: 9000,
                isClosable: true,
            })

        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password })
        }

        fetch('http://mypagemlasa.herokuapp.com/session', requestOptions)
            .then(response => {
                return response.json()
            })
            .then(response => {
                if (response.token) {
                    setToken(response.token)
                    setError('')

                    toast({
                        title: "Você fez login!",
                        description: "Login feito com sucesso",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })

                    saveUserLogged(response.token, response.user)
                }
                else {
                    setToken('')
                    setError(response.errorMessage)

                    toast({
                        title: error,
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                    })
                }
            })
    }

    return (
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
                    <Button
                        onClick={() => login(email, password)}
                        colorScheme="yellow"
                    >Entrar</Button>
                </div>
            </section>
        </div >
    )
}