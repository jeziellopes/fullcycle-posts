import { Post } from "@/types"
import { listPosts } from "@/usecases/listPosts"
import { useEffect, useState } from "react"
import { APP_TIMEOUT, ITEMS_PER_PAGE } from "@/constants"
import { useParams } from "react-router-dom"

export const usePosts = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [count, setCount] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean | undefined>()
  const [posts, setPosts] = useState<Record<string, Post>>()

  const changePage = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  const fetchPosts = () => {
    setLoading(true)
    listPosts()
      .then(({ data }) => setPosts(data
        .reduce((acc: Post[], post: Post) =>
          ({ ...acc, [post.id]: post }), {})))
      .catch(err => {
        console.log(err.message)
        setError(true)
      })
      .finally(() => setLoading(false))
  }

  let loadTimer: ReturnType<typeof setTimeout>

  useEffect(() => {
    if (Object.values(posts || {})?.length || loading) return
    loadTimer = setTimeout(() => fetchPosts(), APP_TIMEOUT);
    return () => clearTimeout(loadTimer)
  })

  useEffect(() => {
    setCount(Math.ceil((Object
      .values(posts || {})?.length || 0) / ITEMS_PER_PAGE))
  }, [posts])

  useEffect(() => {
    setStart((page - 1) * ITEMS_PER_PAGE)
    setEnd(page * ITEMS_PER_PAGE)
  }, [page])

  return {
    page,
    changePage,
    count,
    loading,
    post: (posts || {})[id || 0] || {},
    posts,
    slicedPosts: Object.values(posts || {}).slice(start, end),
    error
  }
}