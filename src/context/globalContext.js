import React, { useState } from 'react'

export const GlobalStateContext = React.createContext({
  showMobileNav: false,
  setShowMobileNav: null,
})

export const GlobalContextProvider = ({ children }) => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  return (
    <GlobalStateContext.Provider
      value={{
        showMobileNav,
        setShowMobileNav,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
