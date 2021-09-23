import { useEffect } from "react"
import { useRouter } from 'next/router'
import Cookie from "js-cookie"
import { Button } from "@chakra-ui/react"


// Will check if user is already logged in by client side
export default function Home() {
    const router = useRouter()

    function logOut() {
        Cookie.remove('@mlasaPortfolio')
        router.push('/login')
    }

    useEffect(() => {
        const userLoggedIn = Cookie.get('@mlasaPortfolio')

        if (!userLoggedIn) {
            router.push('/login')
        }
    }, [])

    return (
        <>
            <h1>Você está logada!</h1>
            <Button onClick={logOut}>Sair</Button>
        </>
    )
}