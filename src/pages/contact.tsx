import { PageProps } from "gatsby"
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from "react"
import { SooBtn } from "."
import Layout from "../components/layout"
import MainWrapper from "../components/MainWrapper"
import Seo from "../components/seo"
import { PageTitle } from "./about"

export interface ContactProps {}

const Contact: React.FC<PageProps<ContactProps>> = () => {
  const [formValue, setFormvalue] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
    company: "",
  })
  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setFormvalue({ ...formValue, [inputName]: inputValue })
  }

  const handleSubmit: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault()
    // TODO the code below works but I still need to sort the type out
    // e.target[0].focus()
    const apiResponse = await fetch("/api/soo-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formValue }),
    }).then(res => res.json())
    console.log(formValue)
    console.log(apiResponse)
    // TODO: redirect to thank you page
  }

  return (
    <Layout>
      <MainWrapper>
        <Seo title="Contact" lang="en" />

        <PageTitle>Contact Me</PageTitle>
        <div>
          <section className="contact" id="contact">
            <div className="contact-content">
              <div className="form-findme">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    {/* method="POST"
                    data-netlify="true" */}
                    <div className="form1">
                      <input
                        onChange={handleChange}
                        value={formValue.name}
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Name"
                        required
                      />
                      <input
                        onChange={handleChange}
                        value={formValue.email}
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email"
                        required
                      />
                      <input
                        onChange={handleChange}
                        value={formValue.subject}
                        type="text"
                        name="subject"
                        required
                        placeholder="Subject"
                      />
                      <div
                        className="recaptcha"
                        data-netlify-recaptcha="true"
                      ></div>
                    </div>
                    <div className="form2">
                      <input
                        onChange={handleChange}
                        value={formValue.company}
                        type="text"
                        name="company"
                        placeholder="Company (optional)"
                      />
                      <textarea
                        onChange={handleChange}
                        value={formValue.message}
                        name="message"
                        required
                        placeholder="Message..."
                        cols={30}
                        rows={10}
                      ></textarea>
                      <SooBtn type="submit">Send</SooBtn>
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
