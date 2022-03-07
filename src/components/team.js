import ceo from "../img/ceo.png"

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
            <img src={ceo} />
            <p className="member-name">Mike Anderson</p>
            <p className="member-role">Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={ceo} />
            <p className="member-name">Mike Anderson</p>
            <p className="member-role">Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={ceo} />
            <p className="member-name">Mike Anderson</p>
            <p className="member-role">Founder & CEO</p>
          </div>
        </div>
        <div className="team-members-bottom">
          <div className="team-member">
            <img src={ceo} />
            <p className="member-name">Mike Anderson</p>
            <p className="member-role">Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={ceo} />
            <p className="member-name">Mike Anderson</p>
            <p className="member-role">Founder & CEO</p>
          </div>
        </div>
      </div>
      <div className="blend team-blend" />
    </div>
  )
}

export default Team
