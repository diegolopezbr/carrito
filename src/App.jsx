
import { Navbar } from "./components/Navbar"
import { Catalog } from "./components/Catalog"
import { CartProvider } from "./contex/CartProvider"
import { BrowserRouter, Routes, Route } from "react-router"

function App() {
  
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Catalog />}  />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
