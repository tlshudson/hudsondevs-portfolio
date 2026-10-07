<template>
  <section id="stack" class="py-20">
    <SectionHeading
      eyebrow="Tech Stack"
      title="Ferramentas que uso no dia a dia"
      description="Em destaque, as tecnologias com que trabalho hoje em produção."
    />

    <div class="rounded-2xl border border-indigo-300/20 bg-indigo-400/[0.04] p-6 md:p-8">
      <h3 class="text-sm font-medium text-indigo-200">Principais tecnologias</h3>
      <ul class="mt-4 flex flex-wrap gap-2" aria-label="Principais tecnologias">
        <li
          v-for="skill in featuredSkills"
          :key="skill"
          class="rounded-lg border border-indigo-300/30 bg-indigo-400/10 px-3.5 py-1.5 text-sm font-medium text-white"
        >
          {{ skill }}
        </li>
      </ul>
    </div>

    <dl class="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
      <div v-for="group in skillGroups" :key="group.title">
        <dt class="text-sm font-semibold text-white">{{ group.title }}</dt>
        <dd>
          <ul class="mt-3 flex flex-wrap gap-2" :aria-label="group.title">
            <TechChip v-for="skill in group.items" :key="skill" :featured="isFeatured(skill)">
              {{ skill }}
            </TechChip>
          </ul>
        </dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
import TechChip from '@/components/TechChip.vue'
import { featuredSkills, skillGroups } from '@/data/profile'

const featured = new Set(featuredSkills)
const isFeatured = (skill) => featured.has(skill)
</script>
