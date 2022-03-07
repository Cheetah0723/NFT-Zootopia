import minus from "../img/minus.png"
import plus from "../img/plus.png"
import "../styles/mint.css"

const Mint = () => {
  return (
    <div className="mint">
      <div className="flex">
        <p className="mint-amount">Mint</p>
        <p>Minted: 8188 / 10000</p>
      </div>
      <div className="charge">
        <div className=" flex charge-elements">
          <a>
            <img src={minus} />
          </a>
          <div></div>
          <a>
            <img src={plus} />
          </a>
        </div>
        <button className="mint-btn">Mint</button>
      </div>
    </div>
  )
}

export default Mint
