'use client'

import React from 'react'
import { Toggle } from '../../../components/ui/toggle'

export const ToggleShowcase = () => {
  const [isDark, setIsDark] = React.useState(false)

  return (
    <Toggle
      isOn={isDark}
      toggleOn={() => setIsDark(!isDark)}
    />
  )
} 