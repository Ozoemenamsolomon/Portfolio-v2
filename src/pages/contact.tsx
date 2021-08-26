import { PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import MainWrapper from "../components/MainWrapper"
import Seo from "../components/seo"

export interface ContactProps {}

const Contact: React.FC<PageProps<ContactProps>> = () => {
  return (
    <Layout>
      <MainWrapper>
        <Seo title="Contact" lang="en" />

        <h1>Contact Me</h1>
        <div>
          <section className="contact" id="contact">
            <div className="contact-content">
              <div className="form-findme">
                <div className="contact-form">
                  <form method="POST" data-netlify="true">
                    <div className="form1">
                      <input
                        type="text"
                        name="Name_en"
                        autoComplete="name"
                        placeholder="Name"
                        required
                      />
                      <input
                        type="email"
                        name="Email_en"
                        autoComplete="email"
                        placeholder="Email"
                        required
                      />
                      <input
                        type="text"
                        name="Subject_en"
                        required
                        placeholder="Subject"
                      />
                      <div
                        className="recaptcha_en"
                        data-netlify-recaptcha="true"
                      ></div>
                    </div>
                    <div className="form2">
                      <input
                        type="text"
                        name="Company_en"
                        placeholder="Company (optional)"
                      />
                      <textarea
                        name="Message_en"
                        required
                        placeholder="Message..."
                        cols={30}
                        rows={10}
                      ></textarea>
                      <button type="submit">Send</button>
                      {/* <!-- <input type="submit" value=""> --> */}
                    </div>
                  </form>
                </div>
                <div className="contact-findme">
                  <p>Find me on:</p>
                  <div className="socials">
                    <a
                      href="https://www.linkedin.com/in/solomon-obinna-ozoemenam-6a3440155/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="./Images/LinkedIn.png" alt="" />
                    </a>
                    <a
                      href="https://www.xing.com/profile/SolomonObinna_Ozoemenam/cv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="./Images/Xing.png" alt="" />
                    </a>
                    <a
                      href="https://github.com/Ozoemenamsolomon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="./Images/github.png" alt="" />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCpoLzjknNT6PNbJ9yX4RUng"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="./Images/YouTube.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-img">
                <img src="./Images/ContactMe_Char.png" alt="" />
              </div>
            </div>
          </section>
        </div>
      </MainWrapper>
    </Layout>
  )
}

export default Contact
