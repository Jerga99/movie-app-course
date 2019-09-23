
import axios from 'axios'


export default async (req, res) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const posts = response.data

  return res.json(posts.slice(0, 20))
}
