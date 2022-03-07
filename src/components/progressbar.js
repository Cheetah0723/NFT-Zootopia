import "../styles/progressbar.css"

const ProgressBar = (props) => {
  return (
    <div className="progressbar-containers">
      <div
        className="progressbar-complete"
        style={{ width: `${props.count * 5}%` }}
      >
        <div className="progressbar-liquid"></div>
      </div>
      <div className="progress">{props.count} / 20 </div>
    </div>
  )
}

export default ProgressBar
