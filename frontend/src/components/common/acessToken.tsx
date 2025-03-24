import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data } = useSession()

  // Add type checks to handle potential undefined values
  const accessToken = data?.accessToken as string | undefined

  return <div>Access Token: {accessToken || "No access token available"}</div>
}