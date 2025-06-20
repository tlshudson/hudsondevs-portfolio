<template>
  <canvas ref="canvas" class="absolute inset-0 w-full h-full z-0" />
</template>

<script>
export default {
  name: 'MatrixRain',
  mounted() {
    const canvas = this.$refs.canvas
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const chars = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops = new Array(columns).fill(1)

    const draw = () => {
      // Fundo semi-transparente para trilha mais longa e lenta
      ctx.fillStyle = 'rgba(49, 46, 129, 0.08)' // bg-indigo-600 com opacidade
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#c7d2fe' // texto indigo-200
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        ctx.fillText(char, x, y)

        // Mais lento: só sobe quando bem abaixo
        if (y > canvas.height && Math.random() > 0.995) {
          drops[i] = 0
        }
        drops[i] += 0.3 // ← velocidade reduzida
      }

      requestAnimationFrame(draw)
    }

    draw()
  }
}
</script>

<style scoped>
canvas {
  background-color: transparent;
}
</style>
