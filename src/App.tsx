import { GridPosts, Header } from "@/components"
import { usePosts } from "@/hooks/usePosts"
import { Container, Pagination } from '@mui/material'
import { ThemeProvider } from "@/styles"

function App() {
  const { count, posts } = usePosts()

  return (
    <ThemeProvider>
      <Container
        maxWidth="md"
        sx={{
          padding: 12,
          maxHeight: '100vh',
          backgroundColor: '#191c20'
        }}
      >
        <Header title="Blog Posts"/>
        <GridPosts posts={posts?.slice(0, 6)} />
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: 400,
            padding: 4
          }}
        >
          <Pagination
            count={count}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default App
