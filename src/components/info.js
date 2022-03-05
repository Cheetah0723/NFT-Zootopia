import sheep from "../img/sheep.png"
import "../styles/info.css"

const Info = () => {
  return (
    <div className="info">
      <div className="info-contents">
        <div className="info-content">
          <div className="info-content-imgs">
            <div className="info-content-img sheep-pos">
              <img src={sheep} />
            </div>
            <div className="info-content-img lion-pos">
              <img src={sheep} />
              <img src={sheep} />
            </div>
          </div>
          <div className="info-content-context">
            <h2 className="info-content-context-title">We Are ZooToPia</h2>
            <div className="small-line" />
            <p>
              Sed ut perspiciatis unde omnis iste natus enim ad minim veniam,
              quis nostrud exercit
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a gallery of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="info-content"></div>
      </div>
    </div>
  )
}

export default Info
