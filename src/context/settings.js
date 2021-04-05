import React, { createContext, useEffect, useState, useContext } from "react"

const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState()

  const initializeSetting = ({
    localStorageKey,
    setValue,
    value,
    fallbackValue,
  }) => {
    if (typeof value !== "undefined") return

    const userValue = localStorage.getItem(localStorageKey)
    if (userValue !== null) {
      let newValue
      try {
        newValue = JSON.parse(userValue)
      } catch (_) {
        newValue = userValue
      }

      setValue(newValue)
    } else {
      setValue(fallbackValue)
    }
  }

  useEffect(() => {
    initializeSetting({
      localStorageKey: "mariosaul.com:sound-enabled",
      setValue: setSoundEnabled,
      value: soundEnabled,
      fallbackValue: true,
    })
  }, [soundEnabled, setSoundEnabled])

  return (
    <SettingsContext.Provider
      value={{
        soundEnabled,
        setSoundEnabled,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const { soundEnabled, setSoundEnabled } = useContext(SettingsContext)

  const toggleSound = () => {
    const newSetting = !soundEnabled
    localStorage.setItem("mariosaul.com:sound-enabled", newSetting)
    setSoundEnabled(newSetting)
  }

  return {
    soundEnabled,
    toggleSound,
  }
}
