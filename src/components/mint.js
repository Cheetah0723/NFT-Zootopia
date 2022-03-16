import { useState } from "react"

import minus from "../img/minus.png"
import plus from "../img/plus.png"

import ProgressBar from "./progressbar"
import "../styles/mint.css"

const Mint = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="mint">
      <div className="flex">
        <p className="mint-amount">Mint</p>
        <p>Minted: 8188 / 10000</p>
      </div>
      <div className="charge">
        <div className=" flex charge-elements">
          <a onClick={() => setCount(count - 1)}>
            <img src={minus} />
          </a>
          <ProgressBar count={count} />
          <a onClick={() => setCount(count + 1)}>
            <img src={plus} />
          </a>
        </div>
        <button className="mint-btn f-waltui">Mint</button>
      </div>
    </div>
  )
}

export default Mint
