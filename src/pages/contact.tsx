import { PageProps, navigate } from "gatsby"
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Container from "../components/MainWrapper"
import { SOOHint } from "../components/Navigation"
import Seo from "../components/seo"
import { PageTitle } from "./about"
import { SooBtn } from "../components/Index"

export interface ContactProps {}
export interface FormValueProp {
  email: string
  name: string
  subject: string
  message: string
  company: string
}

const Contact: React.FC<PageProps<ContactProps>> = ({ location }) => {
  const initialFormValue = {
    email: "",
    name: "",
    subject: "",
    message: "",
    company: "",
  }
  // console.log("params=" )
  useEffect(() => {
    const newURL = new URLSearchParams(location.search)
    setFormvalue({
      ...formValue,
      subject: newURL.get("subject") === null ? "" : `${newURL.get("subject")}`,
    })
    return () => {
      setFormvalue(initialFormValue)
    }
  }, [])
  const [formValue, setFormvalue] = useState<FormValueProp>(initialFormValue)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputName = e.target.name
    const inputValue = e.target.value
    setFormvalue({ ...formValue, [inputName]: inputValue })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    e: FormEvent
  ) => {
    e.preventDefault()
    // TODO the code below works but I still need to sort the type out
    // e.target[0].focus()
    setSubmitting(true)
    setFormError("")

    const apiResponse = await fetch("/api/soo-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    }).then(res => res.json())
    console.log(apiResponse)
    if (!apiResponse.ok) {
      setFormError("An error occured, please ensure all fields are valid.")
      console.log(apiResponse)
    } else {
      setFormvalue(initialFormValue)
      navigate("/thank-you/", { replace: true, state: { ...formValue } })
    }

    setSubmitting(false)
  }

  return (
    <Layout location={location}>
      <Container>
        <Seo title="Contact" lang="en" />

        <PageTitle>Contact Me</PageTitle>
        <div>
          <section className="contact" id="contact">
            <div className="contact-content">
              <div className="form-findme">
                <div className="contact-form">
                  <ContactForm onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        onChange={handleChange}
                        value={formValue.name}
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">E-mail</label>
                      <input
                        onChange={handleChange}
                        value={formValue.email}
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject">Subject</label>
                      <input
                        onChange={handleChange}
                        value={formValue.subject}
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="company">Company</label>
                      <input
                        onChange={handleChange}
                        value={formValue.company}
                        type="text"
                        id="company"
                        name="company"
                        required
                        placeholder="Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="message">Message</label>
                      <textarea
                        onChange={handleChange}
                        value={formValue.message}
                        name="message"
                        required
                        placeholder="Message..."
                        cols={30}
                        rows={7}
                      ></textarea>
                    </div>
                    <div>
                      <SOOHint style={{ marginBottom: "1rem", opacity: 1 }}>
                        Red outline means invalid field, make sure all field are
                        valid. <br />
                        {formError !== "" && (
                          <span style={{ color: "red" }}>{formError}</span>
                        )}
                      </SOOHint>
                      <SooBtn
                        style={{ display: "flex", alignItems: "center" }}
                        type="submit"
                        disabled={submitting}
                      >
                        Send{submitting && "ing"}
                        {submitting && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            style={{
                              margin: "auto",
                              background: "transparent",
                              display: "inline",
                            }}
                            width="23px"
                            height="23px"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid"
                          >
                            <path
                              fill="none"
                              stroke="#ffffff"
                              strokeWidth="8"
                              stroke-dasharray="42.76482137044271 42.76482137044271"
                              d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
                              strokeLinecap="round"
                              style={{
                                transform: "scale(0.79)",
                                transformOrigin: "50px 50px",
                              }}
                            >
                              <animate
                                attributeName="stroke-dashoffset"
                                repeatCount="indefinite"
                                dur="1.6666666666666667s"
                                keyTimes="0;1"
                                values="0;256.58892822265625"
                              ></animate>
                            </path>
                          </svg>
                        )}
                      </SooBtn>
                    </div>
                    {/* <!-- <input type="submit" value=""> --> */}
                  </ContactForm>
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
      </Container>
    </Layout>
  )
}

export default Contact

const ContactForm = styled.form`
  display: grid;
  gap: 0.51rem;
  @media (min-width: 600px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
    & > *:nth-last-child(2) {
      grid-column: span 2;
    }
  }
  & button {
    margin-top: 0;
  }

  & textarea:invalid,
  & input:invalid {
    border-color: red;
  }

  & textarea,
  & input {
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 100%;
    resize: vertical;

    border: 2px solid var(--light-blue);
    box-shadow: 2px 3px 5px #00000033;
  }
`
