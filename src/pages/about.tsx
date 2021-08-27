import { graphql, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import MainWrapper from "../components/MainWrapper"
import Seo from "../components/seo"
import TechStack from "../components/TechStack"
import { myTechStack } from "../definiton"

export interface AboutPageProps {
  allStrapiTechstack: {
    nodes: myTechStack[]
  }
  strapiAbout: { content: string }
}

const About: React.FC<PageProps<AboutPageProps>> = ({
  //TODO relationship between about and teckstack
  data: {
    allStrapiTechstack: { nodes: techStacks },
    strapiAbout: { content: strapiAboutContent },
  },
}) => {
  return (
    <Layout>
      <MainWrapper>
        <Seo
          title="About"
          lang="en"
          description={
            "Solomon Obinna Ozoemenam is a 22-year-old frontend developer with a freelance background in Graphics Design, currently studying computer science in the university of Siegen."
          }
        />

        <PageTitle>About Me</PageTitle>
        <div>
          <section className="about" id="about">
            <div className="about-content">
              <div className="about-text">
                <p>{strapiAboutContent}</p>
              </div>
              <div className="about-devtools">
                <h2>Devtools</h2>
                <DevToolsImages>
                  {techStacks
                    .filter(techStack => !techStack.isSoftware)
                    .map(techStack => (
                      <TechStack key={techStack.id} techStack={techStack} />
                    ))}
                </DevToolsImages>
              </div>{" "}
              <div className="about-software">
                <h3>Softwares</h3>
                <DevToolsImages>
                  {techStacks
                    .filter(techStack => techStack.isSoftware)
                    .map(techStack => (
                      <TechStack key={techStack.id} techStack={techStack} />
                    ))}
                </DevToolsImages>
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

export const pageQuery = graphql`
  {
    allStrapiTechstack {
      nodes {
        id
        imgUrl
        img {
          childImageSharp {
            gatsbyImageData
          }
          publicURL
        }
        name
        isSoftware
      }
    }

    strapiAbout {
      content
    }
  }
`
export const PageTitle = styled.h1`
  background: var(--soo-gradient);
  -webkit-text-stroke: 0.021rem var(--text-colour);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`
const DevToolsImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 350px) {
    grid-template-columns: repeat(3, 1fr);
  }
  /* justify-content: center; */
`
