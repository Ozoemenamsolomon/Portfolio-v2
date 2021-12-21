import { PageProps } from "gatsby"
import React, { MouseEventHandler, useState } from "react"
import { SooBtn } from "../components/Index"
import Layout from "../components/layout"
import { providers } from "ethers"
import { ExternalProvider } from "@ethersproject/providers"
import { PageTitle } from "./about"

interface TestBlockchainProps {}

declare global {
  interface Window {
    ethereum: ExternalProvider
  }
}

const TestBlochchain: React.FC<PageProps<TestBlockchainProps>> = ({
  location,
}) => {
  const [error, setError] = useState("")
  const connectAccount: MouseEventHandler = async e => {
    if (typeof window !== "undefined") {
      try {
        const address = await window.ethereum.request?.({
          method: "eth_requestAccounts",
        })
        console.clear()
        console.log("address", address[0])

        const provider = new providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const balance = await signer.getBalance()
        const signature = await signer.signMessage("solozo")
        console.log("balance", balance)
        console.log("signature", signature)
        console.log("signer", signer)
        console.log("provider", provider)
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <Layout
      container
      lang="en"
      location={location}
      pageTitle="Test Blockchain!"
    >
      <PageTitle>Hey,</PageTitle>
      welcome to my block chain page!
      <div>Im gonna build something great!</div>
      <SooBtn onClick={connectAccount}>
        Click to connect your blockchain account
      </SooBtn>
      {error && <p>{error}</p>}
    </Layout>
  )
}

export default TestBlochchain
