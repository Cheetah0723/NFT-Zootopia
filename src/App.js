import NavBar from "./components/navbar"
import Home from "./components/home"
import Info from "./components/info"
import Roadmap from "./components/roadmap"
import Faq from "./components/faq"
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Info />
      <Roadmap />
      <Faq />
    </div>
  )
}

export default App
