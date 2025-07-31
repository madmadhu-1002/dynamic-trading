"use client"

import { createContext, useContext, useState } from "react"
import { translations } from "@/data/translations"
import { TranslationsType } from "@/types/translations"


interface AppContextType {
  language: string
  setLanguage: (lang: string) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  isRTL: boolean
  translations: TranslationsType
}




const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("en")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isRTL = language === "ar"

  return (
    <AppContext.Provider
      value={{ language, setLanguage, isMobileMenuOpen, setIsMobileMenuOpen, isRTL, translations }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error("useAppContext must be used within AppProvider")
  return context
}
