import "../styles/roadmap.css"

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap-title">
        <h2 className="f-orange">ROAD MAP</h2>
        <p>Road Map</p>
        <div className="small-line"></div>
      </div>

      <div className="roadmap-bar-title">
        <p>The Journey of</p>
        <p>Zootopia</p>
      </div>
      <div className="timeline-board">
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <h2>01</h2>
              <p>Launch of ZooToPia - Honor of Gods(GHOG) NFTs In Feb 2022</p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>02</h2>
              <p>Staking of GHOG NFT</p>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>03</h2>
              <p>Beta Testing of Honor of Gods Game</p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>04</h2>
              <p>Honor of Gods Game Launch</p>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>05</h2>
              <p>Honor of Gods Game Profit Sharing With GHOG NFT Holders</p>
            </div>
          </div>
          <div className="container right view-before">
            <div className="content">
              <h2>06</h2>
              <p>Launching of Other Play-to-Earn Games In The Pipline</p>
            </div>
          </div>
          <a className="view" href="#">
            View All
          </a>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
