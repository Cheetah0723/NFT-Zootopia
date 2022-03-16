import yuki from "../img/Yuki.png"
import tentra from "../img/Tentra.png"
import okura from "../img/Okura.png"
import sumiya from "../img/Sumiya.png"
import cousine from "../img/Cousine.png"

import "../styles/team.css"

const Team = () => {
  return (
    <div className="team">
      <div className="team-title">
        <h2 className="f-orange">OUR TEAM</h2>
        <p>Team Member</p>
        <div className="small-line" />
      </div>
      <div className="team-bar-title">
        <p>Meet with Our</p>
        <p>Amazing Team Members</p>
      </div>
      <div className="team-members">
        <div className="team-members-top">
          <div className="team-member">
            <img src={yuki} />
            <p className="member-name">Iwamoto Yuki</p>
            <p className="member-role">Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={tentra} />
            <p className="member-name">Tentera</p>
            <p className="member-role">Founder & CFO</p>
          </div>
          <div className="team-member">
            <img src={okura} />
            <p className="member-name">Okura Tasuhiro</p>
            <p className="member-role">Founder & CTO</p>
          </div>
        </div>
        <div className="team-members-bottom">
          <div className="team-member">
            <img src={sumiya} />
            <p className="member-name">Sumyia Gondal</p>
            <p className="member-role">Marketing Manager</p>
          </div>
          <div className="team-member">
            <img src={cousine} />
            <p className="member-name">Yasuda Yuki</p>
            <p className="member-role">Developer</p>
          </div>
        </div>
      </div>
      <div className="blend team-blend" />
    </div>
  )
}

export default Team
