import { Post } from "@types"
import { listPosts } from "../usecases/listPosts"
import { useEffect, useState } from "react"
import { REQUEST_TIME } from "../constants"

export const usePosts = () => {
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean | undefined>()
  const [posts, setPosts] = useState<Post[]>()

  const fetchPosts = () => {
    setLoading(true)
    listPosts()
      .then(({ data }) => setPosts(data))
      .catch(err => {
        console.log(err.message)
        setError(true)
      })
      .finally(() => setLoading(false))
  }

  let loadTimer: ReturnType<typeof setTimeout>

  const stop = () => {
    throw new Error('APP WILL STOP')
  }

  useEffect(() => {
    if (error) stop()
    if (posts?.length || loading) return

    loadTimer = setTimeout(() => fetchPosts(), REQUEST_TIME);
    return () => clearTimeout(loadTimer)
  })

  return { loading, posts }
}