import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Layout from "./components/Layout"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Education from "./pages/Education"

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout variant="home"><Home /></Layout>} />
          <Route
            path="/experience"
            element={<Layout variant="content"><Experience /></Layout>}
          />
          <Route
            path="/education"
            element={<Layout variant="content"><Education /></Layout>}
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
