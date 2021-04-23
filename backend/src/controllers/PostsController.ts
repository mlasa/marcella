import Post from '../models/Post'

interface PostDTO {
  title: String;
  author: String;
  labels: String;
  text: String;
  publishedAt: Date,
}

const create = async (postData: PostDTO) => {
  const post = await Post.create(postData)
  return post || null
}
const findPostbyId = async (id) => {
  const post = await Post.findById(id)
  if (!post)
    return null
  return post
}
const remove = async (id) => {
  const post = await findPostbyId(id)
  if (!post) {
    return false
  }
  await Post.deleteOne({ _id: id })
  return true
}
export default { create, remove }