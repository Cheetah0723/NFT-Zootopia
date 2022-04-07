import { useState } from "react"
import logo from "../img/logo.png"
import "../styles/navbar.css"

const NavBar = () => {
  const [isConnect, setIsConnect] = useState(false)

  const walletConnect = () => {
    setIsConnect(true)
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} />
      </div>
      <div className="navbar-buttons">
        <a href="#">Home</a>
        <a href="#">Info</a>
        <a href="#">Roadmap</a>
        <a href="#">FAQ</a>
        <a href="#">Team</a>
        <a href="#">Mint</a>
        <a href="#">Games</a>
        <a href="#">White Paper</a>
      </div>
      <div className="navbar-wallet ">
        <button
          className={!isConnect ? "wallet-connection f-waltui" : "hide"}
          onClick={walletConnect}
        >
          Connect Wallet
        </button>
        <a className={isConnect ? "wallet-address" : "hide"}>
          0xf9221CB65B8115cCc0831Ecb5E076c7aE0c4520c
        </a>
      </div>
    </div>
  )
}

export default NavBar
