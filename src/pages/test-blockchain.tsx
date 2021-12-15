import { PageProps } from "gatsby"
import React, { MouseEventHandler } from "react"
import { SooBtn } from "../components/Index"
import Layout from "../components/layout"

interface TestBlockchainProps {}

const TestBlochchain: React.FC<PageProps<TestBlockchainProps>> = ({
  location,
}) => {
  const connectAccount: MouseEventHandler = e => {
    if (typeof window !== "undefined") {
      console.dir(!!window.ethereum)
    }
  }
  return (
    <Layout
      container
      lang="en"
      location={location}
      pageTitle="Test Blockchain!"
    >
      Hello to my block chain page!
      <div>Im gonna build something great!</div>
      <SooBtn onClick={connectAccount}>
        Click to Connect your blockchain account
      </SooBtn>
    </Layout>
  )
}

export default TestBlochchain
