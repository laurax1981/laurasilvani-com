import React, { Component } from 'react';
import './Works.css';

function Project({ title, intro, tags, date, thumbnail }) {
  return (
    <article className="lsPrj">
      <div className="lsPrj__img"><img src={ thumbnail + ".png" } alt={ title } /></div>
      <div className="lsPrj__desc">
        <span className="lsPrj__tags">{ tags }</span>
        <h3 className="lsPrj__title">{ title }</h3>
        { intro }
        <i className="lsPrj__date">{ date }</i>
      </div>
    </article>
  )
}

class Works extends Component {
  render() {
    return (
      <main>
        <Project
          tags="Design/Development"
          title="UN World Food Programme Evaluations Management System"
          intro="A content management system tracking evaluations data and milestones for WFP's projects."
          date="October 2017"
          thumbnail="oev"
        />
        <Project
          tags="Design/Development"
          title="UN World Food Programme Common API website"
          intro="Some intro text"
          date="August 2017"
          thumbnail="commonapi"
        />
        <Project
          tags="Design/Development"
          title="UN World Food Programme Documents Management System"
          intro="Some intro text"
          date="March 2016"
          thumbnail="dms"
        />
        <Project
          tags="Design"
          title="UN World Food Programme Energy Challenge"
          intro="Some intro text"
          date="March 2016"
          thumbnail="energy"
        />
        <Project
          tags="Design"
          title="UN World Food Programme OIMS"
          intro="Some intro text"
          date="March 2016"
          thumbnail="oims"
        />
        <Project
          tags="Design"
          title="Terre dei Nolfi Logo"
          intro="Some intro text"
          date="March 2016"
          thumbnail="tdn"
        />
        <Project
          tags="Design"
          title="UN World Food Programme Manuals"
          intro="Some intro text"
          date="March 2016"
          thumbnail="manuals"
        />
        <Project
          tags="Design"
          title="UN HR Forms"
          intro="Some intro text"
          date="March 2016"
          thumbnail="hrforms"
        />
        <Project
          tags="Design"
          title="UN OP Web"
          intro="Some intro text"
          date="March 2016"
          thumbnail="opweb"
        />
      </main>
    )
  }
}

export default Works;
