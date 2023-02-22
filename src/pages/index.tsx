import ClientOnly from "@/components/shared/ClientOnly"
import HomeContainer from "@/containers/HomeContainer"
import { NextPage } from "next"
import Head from "next/head"
import React from "react"

const HomePage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <ClientOnly>
        <HomeContainer />
      </ClientOnly>
    </React.Fragment>
  )
}

export default HomePage