import { graphql, PageProps } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import TechStack from "../components/TechStack"
import { myTechStack } from "../definiton"

export interface AboutPageProps {
  strapiAbout: {
    content: string
    techstacks: myTechStack[]
    softskill: {
      softskills: string[] | null
      languages: string[] | null
      sprachen: string[] | null
    }
  }
}

const About: React.FC<PageProps<AboutPageProps>> = ({
  data: {
    strapiAbout: {
      content: strapiAboutContent,
      techstacks: techStacks,
      softskill,
    },
  },
  location,
}) => {
  return (
    <Layout container location={location} pageTitle="About" lang="en">
      <PageTitle>About Me</PageTitle>
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
              {softskill.languages?.map(skill => (
                <li>{skill}</li>
              ))}
            </AboutList>
          </div>
          <div className="about-softskills">
            <h3>Softskills</h3>
            <AboutList>
              {softskill.softskills?.map(skill => (
                <li>{skill}</li>
              ))}
            </AboutList>
          </div>
        </AboutContent>
        <div className="about-img">
          <img src="./Images/AboutMe_Char.png" alt="" />
        </div>
      </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  {
    strapiAbout {
      content
      softskill {
        softskills
        softskills
        languages
        sprachen
      }
      techstacks {
        isSoftware
        id
        img {
          url
        }
        imgUrl
        name
      }
    }
  }
`
export const PageTitle = styled.h1<{ children: ReactNode }>`
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
  & > li {
    text-transform: capitalize;
  }
`
