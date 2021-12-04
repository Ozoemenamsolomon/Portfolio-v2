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
            <div className="about-text">
              <p>{strapiAboutContent}</p>
            </div>
            <AboutContent style={{}} className="about-content">
              <div className="about-devtools">
                <h2>Devtools</h2>
                <DevToolsImages>
                  {techStacks
                    .filter(techStack => !techStack.isSoftware)
                    .map(techStack => (
                      <TechStack key={techStack.id} techStack={techStack} />
                    ))}
                </DevToolsImages>
              </div>
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
                <AboutList>
                  <li>German</li>
                  <li>English</li>
                  <li>Igbo</li>
                  <li>Yoruba</li>
                </AboutList>
              </div>
              <div className="about-softskills">
                <h3>Softskills</h3>
                <AboutList>
                  <li>Attention to detail</li>
                  <li>Teamwork</li>
                  <li>Goal oriented</li>
                  <li>Ready to learn</li>
                </AboutList>
              </div>
            </AboutContent>
            <div className="about-img">
              <img src="./Images/AboutMe_Char.png" alt="" />
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
          url
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
  grid-template-columns: repeat(3, 1fr);
`
const AboutContent = styled.div`
  @media (min-width: 900px) {
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
const AboutList = styled.ul`
  margin-left: 1.5rem;
`
