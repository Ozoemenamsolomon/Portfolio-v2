import { graphql, PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Container from "../components/MainWrapper"
import Seo from "../components/seo"
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

type xType = keyof AboutPageProps["strapiAbout"]["softskill"]

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
  for (const x in softskill) {
    //@ts-ignore
    softskill[x] && console.log(x)
  }
  return (
    <Layout location={location}>
      <Container>
        <Seo title="About" lang="en" />

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
              {/* <pre>{JSON.stringify(softskill, null, 2)}</pre> */}
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
      </Container>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  {
    strapiAbout {
      content
      softskill {
        Softskills
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
