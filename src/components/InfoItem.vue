<template>
  <li class="flex items-start gap-3">
    <component :is="iconComponent" class="mt-0.5 h-5 w-5 shrink-0 text-indigo-300" />
    <div>
      <p class="text-sm font-medium text-white">{{ label }}</p>
      <p class="text-sm text-zinc-400">{{ value }}</p>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue'

import { AcademicCapIcon, MapPinIcon, SparklesIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  icon: { type: String, required: true },
})

const iconMap = {
  'map-pin': MapPinIcon,
  sparkles: SparklesIcon,
  'academic-cap': AcademicCapIcon,
}

const iconComponent = computed(() => iconMap[props.icon] || MapPinIcon)
</script>
