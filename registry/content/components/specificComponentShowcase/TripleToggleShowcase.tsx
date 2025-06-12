'use client'

import React from "react"
import { TripleToggle } from "../../../components/ui/triple-toggle"

export const TripleToggleShowcase = () => {
  const [value, setValue] = React.useState("Monthly")

  return (
    <TripleToggle
      options={{
        main: "Free",
        grouped: {
          title: "Premium",
          subOptions: ["Monthly", "Yearly"]
        }
      }}
      value={value}
      toggleOptions={(val: string) => setValue(val)}
    />
  )
}