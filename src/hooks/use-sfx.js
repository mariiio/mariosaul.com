import { useSettings } from "../context/settings.js"
import liveUp from "../sounds/live-up.wav"
import die from "../sounds/die.wav"
import timeWarning from "../sounds/time-warning.wav"
import jump from "../sounds/jump-small.wav"
import coin from "../sounds/coin.wav"
import bump from "../sounds/bump.wav"
import click from "../sounds/click.wav"

const sfxCache = {}

function useSound(sound, { soundEnabled }) {
  if (!soundEnabled) {
    return [() => {}]
  }

  try {
    if (sfxCache[sound]) {
      return [() => sfxCache[sound].play()]
    } else {
      const sfx = new Audio(sound)
      sfxCache[sound] = sfx

      return [() => sfxCache[sound].play()]
    }
  } catch (e) {
    return [() => {}]
  }
}

export function useSfx() {
  const { soundEnabled } = useSettings()

  const [playBump] = useSound(bump, {
    soundEnabled,
  })

  const [playJump] = useSound(jump, {
    soundEnabled,
  })

  const [playCoin] = useSound(coin, {
    soundEnabled,
  })

  const [playClick] = useSound(click, {
    soundEnabled,
  })

  const [playLiveUp] = useSound(liveUp, {
    soundEnabled,
  })

  const [playTimeWarning] = useSound(timeWarning, {
    soundEnabled,
  })

  const [playDie] = useSound(die, {
    soundEnabled,
  })

  return {
    playJump,
    playClick,
    playBump,
    playCoin,
    playLiveUp,
    playTimeWarning,
    playDie,
  }
}
