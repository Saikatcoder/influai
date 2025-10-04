"use client"
import { ConvexReactClient } from "convex/react"
import { ConvexProvider } from "convex/react"
import { useAuth } from "@clerk/nextjs"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

function ConvexClerkProvider({ children }) {
  const { getToken, isLoaded } = useAuth()

  if (!isLoaded) return null

  return (
    <ConvexProvider client={convex} useAuth={useAuth}>
      {children}
    </ConvexProvider>
  )
}

export default ConvexClerkProvider
