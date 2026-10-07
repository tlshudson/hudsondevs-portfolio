<template>
  <div class="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
    <canvas ref="canvas" class="h-full w-full opacity-25 md:opacity-45" />
    <!-- Keeps the rain at the edges so it never competes with the content. -->
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_40%,var(--color-ink)_40%,transparent_100%)]"
    ></div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvas = ref(null)
const CHARS = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const FONT_SIZE = 16
const FRAME_INTERVAL_MS = 50

let frameId = 0
let removeResize = () => {}

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  let drops = []

  const resize = () => {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
    drops = Array.from({ length: Math.ceil(window.innerWidth / FONT_SIZE) }, () =>
      Math.floor(Math.random() * -50),
    )
  }
  resize()
  window.addEventListener('resize', resize)
  removeResize = () => window.removeEventListener('resize', resize)

  const draw = () => {
    ctx.fillStyle = 'rgba(11, 13, 23, 0.14)'
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
    ctx.fillStyle = '#a5b4fc'
    ctx.font = `${FONT_SIZE}px 'Geist Mono', monospace`

    drops.forEach((drop, i) => {
      ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * FONT_SIZE, drop * FONT_SIZE)
      drops[i] = drop * FONT_SIZE > canvas.value.height && Math.random() > 0.98 ? 0 : drop + 1
    })
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let i = 0; i < 40; i++) draw()
    return
  }

  let last = 0
  const loop = (time) => {
    if (time - last >= FRAME_INTERVAL_MS) {
      draw()
      last = time
    }
    frameId = requestAnimationFrame(loop)
  }
  frameId = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId)
  removeResize()
})
</script>
