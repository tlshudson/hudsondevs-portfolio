<template>
  <section id="sobre" class="py-20">
    <SectionHeading eyebrow="Sobre" title="Do legado em produção aos agentes de IA" />

    <div class="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
      <div class="space-y-5 text-lg leading-relaxed text-zinc-300">
        <p v-for="paragraph in about.paragraphs" :key="paragraph">{{ paragraph }}</p>

        <ul class="grid gap-4 pt-4 sm:grid-cols-2">
          <InfoItem
            v-for="fact in about.facts"
            :key="fact.label"
            :label="fact.label"
            :value="fact.value"
            :icon="fact.icon"
          />
        </ul>
      </div>

      <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <li
          v-for="pillar in about.pillars"
          :key="pillar.title"
          class="rounded-xl border border-white/10 bg-surface/80 p-5 transition-colors hover:border-indigo-300/30"
        >
          <h3 class="font-semibold text-white">{{ pillar.title }}</h3>
          <p class="mt-1.5 text-sm leading-relaxed text-zinc-400">{{ pillar.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import InfoItem from '@/components/InfoItem.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { about } from '@/data/profile'
</script>
