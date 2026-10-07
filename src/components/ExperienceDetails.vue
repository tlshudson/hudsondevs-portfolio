<template>
  <ul class="mt-4 max-w-3xl space-y-2 text-sm leading-relaxed text-zinc-400">
    <li v-for="highlight in highlights" :key="highlight" class="flex gap-3">
      <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-300/70" aria-hidden="true"></span>
      <span>{{ highlight }}</span>
    </li>
  </ul>
  <ul v-if="stack.length" class="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologias">
    <TechChip v-for="tech in stack" :key="tech">{{ tech }}</TechChip>
  </ul>
</template>

<script setup>
import TechChip from '@/components/TechChip.vue'

defineProps({
  highlights: { type: Array, required: true },
  stack: { type: Array, default: () => [] },
})
</script>
