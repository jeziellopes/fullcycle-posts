import Routes from "@/routes"
import { ThemeProvider } from "@/styles"

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}

export default App
