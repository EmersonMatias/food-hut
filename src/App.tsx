import { RouterProvider } from "react-router-dom"
import router from "./react-router/router"
import GlobalStyle from "./components/GlobalStyle/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>

  )
}

export default App
