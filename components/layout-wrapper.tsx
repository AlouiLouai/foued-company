"use client"

import { usePathname } from "next/navigation"
import { Chatbot } from "@/components/chatbot"
import type React from "react"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const showChatbot = pathname !== "/contact"

  return (
    <>
      {children}
      {showChatbot && <Chatbot />}
    </>
  )
}
