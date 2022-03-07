import logo from "../img/logo.png"
import "../styles/navbar.css"

const NavBar = () => {
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
        <button className="wallet-connection f-waltui ">Connect Wallet</button>
      </div>
    </div>
  )
}

export default NavBar
