import React from "react"
import Layout, { MainWrapper } from "../components/layout"

const Process = () => {
  return (
    <Layout pageTitle="Typical Design Process">
      <MainWrapper>
        <div>
          <section className="process" id="process">
            <div className="process-content">
              <div className="process-text">
                <p>
                  The plan to document my process was initially not considered.
                  I was however inspired to include this process in this project
                  by the social media challenge “How it started vs How it´s
                  going”. So the pictures below should give you an insight of
                  how the project all started and the fact that you´re reading
                  this here is a result of how it´s going. “How it´s going”
                  because I believe there is still a lot of room for
                  improvement.
                </p>
              </div>
              <div className="process1" data-description="">
                <div className="card-hover"></div>
              </div>
              <div className="process2" data-description="">
                <div className="card-hover"></div>
              </div>
              <div className="process3" data-description="">
                <div className="card-hover"></div>
              </div>
            </div>
          </section>
        </div>
      </MainWrapper>
    </Layout>
  )
}

export default Process
