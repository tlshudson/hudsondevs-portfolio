<template>
  <li class="flex items-start gap-2">
    <component :is="iconComponent" class="w-5 h-5 text-white mt-1" />
    <div>
      <p class="text-xs font-bold text-white sm:text-sm">{{ label }}:</p>
      <p class="text-xs text-gray-200 sm:text-sm">{{ value }}</p>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue'

import {
  MapPinIcon,
  CalendarIcon,
  FlagIcon,
  SparklesIcon,
  AcademicCapIcon,
  BuildingOfficeIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  label: String,
  value: String,
  icon: {
    type: String,
    required: true
  }
})

const iconMap = {
  'map-pin': MapPinIcon,
  'calendar': CalendarIcon,
  'flag': FlagIcon,
  'sparkles': SparklesIcon,
  'academic-cap': AcademicCapIcon,
  'building-office': BuildingOfficeIcon
}

const iconComponent = computed(() => iconMap[props.icon] || MapPinIcon)
</script>
