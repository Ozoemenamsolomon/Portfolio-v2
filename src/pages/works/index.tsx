import { Link, PageProps } from "gatsby"
import React from "react"
import { SooBtn } from ".."
import Layout from "../../components/layout"
import Container from "../../components/MainWrapper"
import { PageTitle } from "../about"

interface WorkProp {}

const Work: React.FC<PageProps<WorkProp>> = ({ location }) => {
  return (
    <Layout location={location}>
      <Container>
        <PageTitle>Portfolio</PageTitle>
        <div>
          <section className="work" id="work">
            <div className="work-content">
              <div className="work-text">
                <p>
                  Here are a few of my finest Projects.
                  <br />
                  To learn more about my design process using my website as a
                  case study please click on the button below.
                </p>
                <Link to="/blog/posts/process">
                  <SooBtn tabIndex={-1}>Design Process</SooBtn>
                </Link>
                {/* <!-- <input type="button" value="Design Process"> --> */}
              </div>
              <div className="work1" data-description="coming soon">
                <div className="card-hover">
                  <a
                    href="#livedemo"
                    target="_blank"
                    rel="noreferrer"
                    title="Live demo"
                  >
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </a>
                  <a
                    href="#github"
                    target="_blank"
                    rel="noreferrer"
                    title="source code"
                  >
                    <i className="fa fa-code" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="work2" data-description="">
                <div className="card-hover">
                  <a
                    href="https://ozoemenamsolomon.github.io/creative-agency/"
                    target="_blank"
                    rel="noreferrer"
                    title="Live demo"
                  >
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://github.com/Ozoemenamsolomon/creative-agency"
                    target="_blank"
                    rel="noreferrer"
                    title="source code"
                  >
                    <i className="fa fa-code" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="work3" data-description="">
                <div className="card-hover">
                  <a
                    href="https://ozoemenamsolomon.github.io/Ola-portfolio/"
                    target="_blank"
                    rel="noreferrer"
                    title="Live demo"
                  >
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://github.com/Ozoemenamsolomon/Ola-portfolio"
                    target="_blank"
                    rel="noreferrer"
                    title="source code"
                  >
                    <i className="fa fa-code" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="work4" data-description="">
                <div className="card-hover">
                  <a
                    href="https://ozoemenamsolomon.github.io/Todo-App/"
                    target="_blank"
                    rel="noreferrer"
                    title="Live demo"
                  >
                    <i className="fa fa-eye" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://github.com/Ozoemenamsolomon/Todo-App"
                    target="_blank"
                    rel="noreferrer"
                    title="source code"
                  >
                    <i className="fa fa-code" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  )
}

export default Work
