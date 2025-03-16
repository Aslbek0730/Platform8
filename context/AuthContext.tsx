"use client"

import { createContext, type ReactNode } from "react"
import { SessionProvider, useSession } from "next-auth/react"

export const AuthContext = createContext<{
  user: any
  status: "loading" | "authenticated" | "unauthenticated"
}>({
  user: null,
  status: "unauthenticated",
})

export function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}

export function useAuth() {
  const { data: session, status } = useSession()

  return {
    user: session?.user,
    status: status,
  }
}

