"use client"

import BreadCrumb from "./ui/BreadCrumb"
import { useAppContext } from "@/context/AppContext"
import { motion } from "framer-motion"
import ExpertiseAlternatingLayout from "./ExpertiseDivisions"

const Divisions = () => {
    const {
        translations,
        language,
        isRTL
      } = useAppContext()
  return (
    <>
    <div className="container mx-auto">
        <BreadCrumb
        title={"Divisions"}
        breadcrumb={"Divisions"}
        homeLabel={"home"}
        backgroundImage=""
        isRTL={isRTL} // or true for Arabic, etc.
      />
      
      <div className="p-5">
      <ExpertiseAlternatingLayout translations={translations} language={language}/>
      </div>
      </div>
    </>
  )
}

export default Divisions