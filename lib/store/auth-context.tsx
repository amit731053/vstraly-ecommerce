"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { User } from "@/lib/data/types"

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isAdmin: boolean
  login: (email: string, password: string, role?: "user" | "admin") => void
  register: (name: string, email: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const mockUsers: User[] = [
  { id: "1", name: "Priya Sharma", email: "priya@example.com", role: "user" },
  { id: "2", name: "Admin", email: "admin@vastra.com", role: "admin" },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = useCallback(
    (email: string, _password: string, role: "user" | "admin" = "user") => {
      const mockUser: User = {
        id: role === "admin" ? "2" : "1",
        name: role === "admin" ? "Admin" : "Priya Sharma",
        email,
        role,
      }
      setUser(mockUser)
    },
    []
  )

  const register = useCallback((name: string, email: string, _password: string) => {
    const newUser: User = {
      id: String(mockUsers.length + 1),
      name,
      email,
      role: "user",
    }
    setUser(newUser)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
