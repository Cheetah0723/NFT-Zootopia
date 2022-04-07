import { useState } from "react"

import sheep from "../img/sheep.png"
import rabbit from "../img/faq-rabbit.png"
import carrot_rabbit from "../img/carrot-rabbit.png"
import rab_fox from "../img/rabi-fox.png"
import lion from "../img/lion.png"
import buffelo from "../img/buffelo.png"
import ox from "../img/ox.png"
import sloth from "../img/sloth.png"
import furry from "../img/furry.png"
import otter from "../img/otter.png"
import mr from "../img/mr.png"
import fox from "../img/fox.png"
import "../styles/faq.css"

const faq = () => {
  const [mintprice, setMintprice] = useState(false)
  const [mintdate, setMintdate] = useState(false)
  const [mintcount, setMintcount] = useState(false)
  const [presale, setPresale] = useState(false)
  const [benefit, setBenefit] = useState(false)
  const [reveal, setReveal] = useState(false)

  const mintPrice = () => {
    setMintprice(!mintprice)
  }
  const mintDate = () => {
    setMintdate(!mintdate)
  }
  const mintCount = () => {
    setMintcount(!mintcount)
  }
  const Presale = () => {
    setPresale(!presale)
  }
  const Benefit = () => {
    setBenefit(!benefit)
  }
  const Reveal = () => {
    setReveal(!reveal)
  }

  return (
    <div className="faq">
      <div className="faq-title">
        <h2 className="f-orange">F A Q</h2>
        <p>FAQ</p>
        <div className="small-line" />
      </div>
      <div className="faq-bar-title">
        <p>Frequently Asked</p>
        <p>Questions</p>
      </div>
      <div className="faq-elements">
        <div className="faq-element">
          <div className="faq-question" onClick={mintPrice}>
            <p>What is the mint price?</p>
            <button className={mintprice ? "" : "hide"}>-</button>
            <button className={mintprice ? "hide" : ""}>+</button>
          </div>
          <div className={mintprice ? "faq-answer" : "hide"}>
            <p>-1st Round of Whitelist Sales: 14MATIC (20 USDT)</p>
            <p>-2st Round of Whitelist Sales: 22MATIC (35 USDT)</p>
            <p>-Pubic Sales: 30 MATIC (50 USDT)</p>
          </div>
        </div>
        <div className="faq-element">
          <div className="faq-question" onClick={mintDate}>
            <p>When is the mint?</p>
            <button className={mintdate ? "" : "hide"}>-</button>
            <button className={mintdate ? "hide" : ""}>+</button>
          </div>
          <div className={mintdate ? "faq-answer" : "hide"}>
            <p>-1st Round of Whitelist Sales: 14MATIC (20 USDT)</p>
            <p>-2st Round of Whitelist Sales: 22MATIC (35 USDT)</p>
            <p>-Pubic Sales: 30 MATIC (50 USDT)</p>
          </div>
        </div>
        <div className="faq-element">
          <div className="faq-question" onClick={mintCount}>
            <p>How many GHOG NFTs will be available?</p>
            <button className={mintcount ? "" : "hide"}>-</button>
            <button className={mintcount ? "hide" : ""}>+</button>
          </div>
          <div className={mintcount ? "faq-answer" : "hide"}>
            <p>-1st Round of Whitelist Sales: 14MATIC (20 USDT)</p>
            <p>-2st Round of Whitelist Sales: 22MATIC (35 USDT)</p>
            <p>-Pubic Sales: 30 MATIC (50 USDT)</p>
          </div>
        </div>
        <div className="faq-element">
          <div className="faq-question" onClick={Presale}>
            <p>Will there be a pre-sale?</p>
            <button className={presale ? "" : "hide"}>-</button>
            <button className={presale ? "hide" : ""}>+</button>
          </div>
          <div className={presale ? "faq-answer" : "hide"}>
            <p>-1st Round of Whitelist Sales: 14MATIC (20 USDT)</p>
            <p>-2st Round of Whitelist Sales: 22MATIC (35 USDT)</p>
            <p>-Pubic Sales: 30 MATIC (50 USDT)</p>
          </div>
        </div>
        <div className="faq-element">
          <div className="faq-question" onClick={Benefit}>
            <p>What are the benefits of holding one or multiple GHOG NFTs?</p>
            <button className={benefit ? "" : "hide"}>-</button>
            <button className={benefit ? "hide" : ""}>+</button>
          </div>
          <div className={benefit ? "faq-answer" : "hide"}>
            <p>-1st Round of Whitelist Sales: 14MATIC (20 USDT)</p>
            <p>-2st Round of Whitelist Sales: 22MATIC (35 USDT)</p>
            <p>-Pubic Sales: 30 MATIC (50 USDT)</p>
          </div>
        </div>
        <div className="faq-element">
          <div className="faq-question" onClick={Reveal}>
            <p>When is the reveal?</p>
            <button className={reveal ? "" : "hide"}>-</button>
            <button className={reveal ? "hide" : ""}>+</button>
          </div>
          <div className={reveal ? "faq-answer" : "hide"}>
            <p>-1st Round of Whitelist Sales: 14MATIC (20 USDT)</p>
            <p>-2st Round of Whitelist Sales: 22MATIC (35 USDT)</p>
            <p>-Pubic Sales: 30 MATIC (50 USDT)</p>
          </div>
        </div>
        <div className="faq-sheep ">
          <img src={sheep} className="f-size" />
        </div>
        <div className="faq-rabbit">
          <img src={rabbit} className="f-size" />
        </div>
      </div>
      <div className="blend faq-left" />
      <div className="img-gallerys">
        <div className="img-gallery-top">
          <div className="element-img">
            <img src={carrot_rabbit} />
          </div>
          <div className="element-img">
            <img src={rabbit} />
          </div>
          <div className="element-img">
            <img src={rab_fox} />
          </div>
          <div className="element-img">
            <img src={lion} />
          </div>
          <div className="element-img">
            <img src={buffelo} />
          </div>
          <div className="element-img">
            <img src={sheep} />
          </div>
        </div>
        <div className="img-gallery-bottom">
          <div className="element-img">
            <img src={ox} />
          </div>
          <div className="element-img">
            <img src={sloth} />
          </div>
          <div className="element-img">
            <img src={furry} />
          </div>
          <div className="element-img">
            <img src={otter} />
          </div>
          <div className="element-img">
            <img src={mr} />
          </div>
          <div className="element-img">
            <img src={fox} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default faq
