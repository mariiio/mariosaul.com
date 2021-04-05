import { useSettings } from "../context/settings.js"
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
    volume: 0.5,
  })

  const [playJump] = useSound(jump, {
    soundEnabled,
    volume: 0.5,
  })

  const [playCoin] = useSound(coin, {
    soundEnabled,
    volume: 0.5,
  })

  const [playClick] = useSound(click, {
    soundEnabled,
    volume: 0.5,
  })

  return {
    playJump,
    playClick,
    playBump,
    playCoin,
  }
}
