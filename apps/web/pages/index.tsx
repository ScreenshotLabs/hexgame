import Link from "next/link"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import Game from "app/hex/components"

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <Game />
    </Layout>
  )
}

export default Home
