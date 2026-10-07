<template>
  <li
    class="rounded-md border px-2.5 py-1 font-mono text-xs transition-colors duration-200"
    :class="
      featured
        ? 'border-indigo-400/40 bg-indigo-400/10 text-indigo-100'
        : 'border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20'
    "
  >
    <slot />
  </li>
</template>

<script setup>
defineProps({
  featured: { type: Boolean, default: false },
})
</script>
