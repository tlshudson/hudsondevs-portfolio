<template>
  <footer class="border-t border-white/5">
    <div
      class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-zinc-500 md:px-8"
    >
      <p>© {{ year }} Hudson Teles</p>
      <a href="#inicio" class="transition-colors hover:text-white">Voltar ao topo ↑</a>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
