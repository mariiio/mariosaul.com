import { useSettings } from "../context/settings.js"
import themeSong from "../sounds/theme-song.mp3"
import liveUp from "../sounds/live-up.wav"
import die from "../sounds/die.wav"
import timeWarning from "../sounds/time-warning.wav"
import jump from "../sounds/jump-small.wav"
import coin from "../sounds/coin.wav"
import bump from "../sounds/bump.wav"
import pop from "../sounds/pop.mp3"
import click from "../sounds/click.wav"

const sfxCache = {}

function useSound(
  sound,
  { soundEnabled, musicEnabled, volume = 1, loop = false }
) {
  if (
    (soundEnabled !== undefined && !soundEnabled) ||
    (musicEnabled !== undefined && !musicEnabled)
  ) {
    return [() => {}]
  }

  try {
    if (sfxCache[sound]) {
      return [
        () => {
          sfxCache[sound].play().catch(() => {})
        },
      ]
    } else {
      const sfx = new Audio(sound)
      sfx.volume = volume
      sfx.loop = loop
      sfxCache[sound] = sfx

      return [
        () => {
          sfxCache[sound].play().catch(() => {})
        },
      ]
    }
  } catch (e) {
    return [() => {}]
  }
}

function stopSound(sound) {
  if (!sfxCache[sound]) {
    return () => {}
  }
  return () => sfxCache[sound].pause()
}

export function useSfx() {
  const { soundEnabled, musicEnabled } = useSettings()

  const [playThemeSong] = useSound(themeSong, {
    musicEnabled,
    volume: 0.3,
    loop: true,
  })

  const stopThemeSong = stopSound(themeSong)

  const [playBump] = useSound(bump, {
    soundEnabled,
  })

  const [playJump] = useSound(jump, {
    soundEnabled,
  })

  const [playCoin] = useSound(coin, {
    soundEnabled,
  })

  const [playPop] = useSound(pop, {
    soundEnabled,
  })

  const [playClick] = useSound(click, {
    soundEnabled,
  })

  const [playLiveUp] = useSound(liveUp, {
    soundEnabled,
  })

  const [playTimeWarning] = useSound(timeWarning, {
    musicEnabled,
  })

  const [playDie] = useSound(die, {
    musicEnabled,
  })

  return {
    playThemeSong,
    stopThemeSong,
    playJump,
    playClick,
    playPop,
    playBump,
    playCoin,
    playLiveUp,
    playTimeWarning,
    playDie,
  }
}
