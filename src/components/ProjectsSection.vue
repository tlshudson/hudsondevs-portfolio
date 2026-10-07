<template>
  <section id="projetos" class="py-20">
    <SectionHeading eyebrow="Projetos" title="Projetos pessoais" />

    <article
      v-for="project in projects"
      :key="project.title"
      class="grid overflow-hidden rounded-2xl border border-white/10 bg-surface/80 md:grid-cols-[1fr_1.1fr]"
    >
      <div class="flex flex-col p-6 md:p-10">
        <p class="font-mono text-xs tracking-widest text-indigo-300 uppercase">
          {{ project.subtitle }}
        </p>
        <h3 class="mt-2 text-3xl font-semibold tracking-tight text-white">{{ project.title }}</h3>
        <p class="mt-4 leading-relaxed text-zinc-300">{{ project.description }}</p>
        <ul class="mt-6 flex flex-wrap gap-1.5" aria-label="Tecnologias">
          <TechChip v-for="tech in project.stack" :key="tech">{{ tech }}</TechChip>
        </ul>
        <a
          :href="project.repository"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center gap-2 self-start rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-indigo-300/60 hover:bg-indigo-400/10 active:scale-[0.98]"
        >
          <BrandIcon name="github" class="h-4 w-4" />
          Ver código no GitHub
        </a>
      </div>

      <div
        class="border-t border-white/10 bg-ink/80 p-6 md:border-t-0 md:border-l md:p-8"
        aria-hidden="true"
      >
        <div class="flex gap-1.5">
          <span class="h-2.5 w-2.5 rounded-full bg-zinc-700"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-zinc-700"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-zinc-700"></span>
        </div>
        <pre
          class="mt-5 overflow-x-auto font-mono text-xs leading-6 text-zinc-400 md:text-sm"
        ><template v-for="line in project.tree" :key="line"><span :class="line.endsWith('/') ? 'text-indigo-200' : ''">{{ line }}</span>
</template></pre>
      </div>
    </article>

    <a
      :href="contacts.github"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-8 inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
    >
      Mais projetos e estudos no GitHub
      <ArrowUpRightIcon class="h-4 w-4" />
    </a>
  </section>
</template>

<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'

import BrandIcon from '@/components/BrandIcon.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import TechChip from '@/components/TechChip.vue'
import { contacts, projects } from '@/data/profile'
</script>
