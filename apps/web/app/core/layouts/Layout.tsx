import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import { Box } from "@chakra-ui/react"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "game-of-blocks"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg="#06122e">{children}</Box>
    </>
  )
}

export default Layout
