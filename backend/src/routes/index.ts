import { Router } from 'express'
import postsRouter from './posts';
import profileRouter from './profile';
import sessionRouter from './session';

const router = Router()

router.get('/', async (request, response) => {

  return response.status(200).json({ apiWorking: 'Tudo suave' })
})

router.use('/posts', postsRouter)
router.use('/profile', profileRouter)
router.use('/session', sessionRouter)


export default router