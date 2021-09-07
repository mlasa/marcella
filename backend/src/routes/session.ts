import { Router } from 'express'

const sessionRouter = Router()

sessionRouter.post('/', (request, response) => {
    const { password, name } = request.body

    return response.status(204).send('Rota de login')
})

export default sessionRouter