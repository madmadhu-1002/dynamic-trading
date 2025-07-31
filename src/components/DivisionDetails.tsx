"use client"

import DDMainContent from "./DDMainContent"
import BreadCrumb from "./ui/BreadCrumb"
import { useAppContext } from "@/context/AppContext"

interface DivisionDetailsProps {
    division: {
      title: string
      description: string
      images?: string[]
      ar?: { title: string; description: string }
    }
  }

const DivisionDetails = ({ division }: DivisionDetailsProps) => {
    const {
        translations,
        language,
        isRTL
      } = useAppContext()
      const localizedTitle = language === "ar" && division.ar?.title ? division.ar.title : division.title
  return (
    <>
        <BreadCrumb
        title={localizedTitle}
        breadcrumb={"Divisions details"}
        homeLabel={"home"}
        backgroundImage=""
        isRTL={isRTL} // or true for Arabic, etc.
      />
      <DDMainContent division={division} translations={translations} language={language} isRTL={isRTL}/>
    </>
  )
}

export default DivisionDetails