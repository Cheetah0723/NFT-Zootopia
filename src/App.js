import NavBar from "./components/navbar"
import Home from "./components/home"
import Info from "./components/info"
import Roadmap from "./components/roadmap"
import Faq from "./components/faq"
import Team from "./components/team"
import Game from "./components/games"
import Mint from "./components/mint"
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Info />
      <Roadmap />
      <Faq />
      <Team />
      <Game />
      <Mint />
    </div>
  )
}

export default App
