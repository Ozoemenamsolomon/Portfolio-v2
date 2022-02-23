import { PageProps } from "gatsby"
import React, { MouseEventHandler, useState } from "react"
import { PageTitle, SooBtn } from "../components/Index"
import Layout from "../components/layout"
import { providers } from "ethers"
import { ExternalProvider } from "@ethersproject/providers"

interface TestBlockchainProps {}

declare global {
  interface Window {
    ethereum?: ExternalProvider
  }
}

const TestBlochchain: React.FC<PageProps<TestBlockchainProps>> = ({
  location,
}) => {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [address, setAddress] = useState("")

  const connectAccount: MouseEventHandler = async e => {
    if (typeof window !== "undefined") {
      try {
        setLoading(true)
        setError("")
        setAddress("")
        if (!window.ethereum)
          throw new Error(
            "You need the metamask extension to continue. Download it on your computer from <a target='_blank' href='https://metamask.io'>metamask.io</a>"
          )

        const chainId = await window.ethereum.request?.({
          method: "eth_chainId",
        })

        if (chainId !== "0x1") {
          setError(
            "You're currently not connected to the mainnet, you'd need to be on mainnet to continue."
          )

          await window.ethereum.request?.({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x1" }],
          })
        }

        const addresses = await window.ethereum.request?.({
          method: "eth_requestAccounts",
        })

        if (addresses.length > 1)
          throw new Error(
            "You've selected more than one account please try again with a single account"
          )
        const address = addresses[0]
        setAddress(address)

        console.clear()
        const provider = new providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const signature = await signer.signMessage("solozo")
        const balance = await signer.getBalance()
        console.log("provider", provider)
        console.log("balance", balance)
        console.log("signature", signature)
        console.log("signer", signer)
      } catch (error) {
        // @ts-ignore
        if (error.code === 4001) {
          setError("Please grant access to continue")
          return
        }
        // @ts-ignore
        setError(error.message)
      } finally {
        setLoading(false)
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
      {address && <p>Your connected address: {address}</p>}
      <SooBtn disabled={loading} onClick={connectAccount}>
        Click to connect your blockchain account
      </SooBtn>
      {error && <p dangerouslySetInnerHTML={{ __html: error }}></p>}
    </Layout>
  )
}

export default TestBlochchain
