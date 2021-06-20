import { useEffect } from "react"
import { useSettings } from "../context/settings.js"
import { useSfx } from "../hooks/use-sfx.js"

export function MusicPlayer({ ...props }) {
  const { musicEnabled } = useSettings()
  const { playThemeSong, stopThemeSong } = useSfx()

  useEffect(() => {
    musicEnabled ? playThemeSong() : stopThemeSong()
  }, [musicEnabled])

  return false
}
