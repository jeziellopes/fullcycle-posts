import { Header } from "./components"
import { GridPosts } from "./components"
import { usePosts } from "./hooks/usePosts"

function App() {
  const { posts } = usePosts()

  return (
    <div className="App">
      <Header title="Imersão Fullcycle - Desafio React.js"/>
      <GridPosts posts={posts} />
    </div>
  )
}

export default App
