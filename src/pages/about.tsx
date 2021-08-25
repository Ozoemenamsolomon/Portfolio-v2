import React from "react"
import Layout, { MainWrapper } from "../components/layout"
import Seo from "../components/seo"

const About: React.FC = () => {
  return (
    <Layout pageTitle="About Me">
      <Seo
        title="About"
        lang="en"
        description={
          "Solomon Obinna Ozoemenam is a 22-year-old frontend developer with a freelance background in Graphics Design, currently studying computer science in the university of Siegen."
        }
      />
      <MainWrapper>
        <div>
          <section className="about" id="about">
            <div className="about-content">
              <div className="about-text">
                <p>
                  I´m a 22-year-old frontend developer with a freelance
                  background in Graphics Design, currently studying computer
                  science in the university of Siegen.
                  <br />
                  With a combination of graphics designing and software
                  development, I look for creative ways to write efficient codes
                  without compromising on the aesthetics of my projects.
                  <br />
                  I´m very interested in the software development spectrum and
                  very much open to learning more technologies with the ultimate
                  goal of becoming a Full-Stack developer.
                  <br />
                  Feel free to reach out to me by using the contact form below
                  or by clicking{" "}
                  <a href="mailto:ozoemenamsolomon@yahoo.com">here</a>.
                </p>
              </div>
              <div className="about-software">
                <h3>Softwares</h3>
                <div className="software-images">
                  <img src="./Images/Adobe_XD.png" alt="" />
                  <img src="./Images/MS_Powerpoint.png" alt="" />
                  <img src="./Images/Adobe_Photoshop.png" alt="" />
                  <img src="./Images/MS_Excel.png" alt="" />
                  <img src="./Images/MS_Word.png" alt="" />
                  <img src="./Images/MS_Access.png" alt="" />
                  <img src="./Images/Adobe_Illustrator.png" alt="" />
                </div>
              </div>
              <div className="about-devtools">
                <h3>Devtools</h3>
                <div className="devtools-images">
                  <img src="./Images/html.png" alt="" />
                  <img src="./Images/CSS.png" alt="" />
                  <img src="./Images/JS.png" alt="" />
                </div>
              </div>
              <div className="about-language">
                <h3>Languages</h3>
                <ul>
                  <li>German</li>
                  <li>English</li>
                  <li>Igbo</li>
                  <li>Yoruba</li>
                </ul>
              </div>
              <div className="about-softskills">
                <h3>Softskills</h3>
                <ul>
                  <li>Attention to detail</li>
                  <li>Teamwork</li>
                  <li>Goal oriented</li>
                  <li>Ready to learn</li>
                </ul>
              </div>
              <div className="about-img">
                <img src="./Images/AboutMe_Char.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </MainWrapper>
    </Layout>
  )
}

export default About
