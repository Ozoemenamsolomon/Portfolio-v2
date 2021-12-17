import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { SooBtn } from "../../components/Index"
import Layout from "../../components/layout"
import ProjectCard, { ProjectProp } from "../../components/ProjectCard"

interface WorkProp {
  allStrapiProject: {
    nodes: ProjectProp[]
  }
}

const Work: React.FC<PageProps<WorkProp>> = ({
  location,
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <Layout container location={location} pageTitle="Portfolio" lang="en">
      <section className="work" id="work">
        <div className="work-text">
          <p>
            Here are a few of my finest Projects.
            <br />
            To learn more about my design process using my website as a case
            study please click on the button below.
          </p>
          <Link to="/blog/posts/process">
            <SooBtn tabIndex={-1}>Design Process</SooBtn>
          </Link>
        </div>
        <h4>NB: Still in progress...</h4>
        <ProjectCardSection>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />
          })}
        </ProjectCardSection>
        {/* TODO repliacate in CMS 
        <div className="work1" data-description="coming soon">
                
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
              </div> */}
      </section>
    </Layout>
  )
}

export default Work
// TODO to be used for the Gql query: ($lang: String)
export const query = graphql`
  query {
    allStrapiProject(filter: { locale: { eq: "en" } }) {
      nodes {
        id
        codeUrl
        projectUrl
        title
        img {
          url
        }
        techstacks {
          name
        }
        excerpt
      }
    }
  }
`
const ProjectCardSection = styled.section`
  --max-card-size: 270px;
  grid-template-columns: repeat(auto-fit, minmax(var(--max-card-size), 1fr));
  display: grid;
  gap: 1rem;
  padding: 0;
  margin: 2rem auto;
  justify-content: space-around;

  @media (min-width: 2000px) {
    & {
      --max-card-size: 550px;
    }
  }
`
