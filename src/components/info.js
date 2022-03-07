import all from "../img/all.png"
import sheep from "../img/sheep.png"
import "../styles/info.css"

const Info = () => {
  return (
    <div className="info">
      <div className="info-contents">
        <div className="info-content">
          <div className="info-content-imgs">
            <img src={sheep} />
          </div>
        </div>
        <div className="info-content start">
          <div className="info-content-context ">
            <h2 className="info-content-context-title f-waltreg">
              We Are ZooToPia
            </h2>
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
            <button>More About Us</button>
          </div>
        </div>
      </div>
      <div className="all">
        <img src={all} />
      </div>
      <div className="blend about-left" />
      <div className="blend about-right" />
    </div>
  )
}

export default Info
