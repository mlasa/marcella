import { Router } from 'express'
import postsController from '../controllers/PostsController'

const router = Router()

router.post('/posts', async (request, response) => {
  const { title, text, author, labels } = request.body;

  if (!title || !text)
    return response.status(400).send('At least title and text must exist')

  const postCreated = await postsController.create({
    title,
    author,
    labels,
    text,
    publishedAt: new Date(),
  })

  return response.status(200).json(postCreated)

})

router.delete('/posts', async (request, response) => {
  const { id } = request.query;

  if (!id)
    return response.status(400).send('Id nedeed for delete')

  const postToRemove = await postsController.remove(id)
  if (!postToRemove)
    return response.status(400).send('Post not found')

  return response.status(200).send()
})


export default router