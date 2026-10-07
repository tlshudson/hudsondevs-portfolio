<template>
  <header class="mb-10 max-w-2xl">
    <p class="font-mono text-xs tracking-widest text-indigo-300 uppercase">{{ eyebrow }}</p>
    <h2 class="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">{{ title }}</h2>
    <p v-if="description" class="mt-3 text-zinc-400">{{ description }}</p>
  </header>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>
