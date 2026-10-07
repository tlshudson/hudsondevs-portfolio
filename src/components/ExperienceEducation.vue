<template>
  <section id="experiencia" class="py-20">
    <SectionHeading eyebrow="Trajetória" title="Experiência profissional" />

    <ol class="relative space-y-12 border-l border-white/10 pl-6 md:pl-10">
      <li v-for="job in experiences" :key="`${job.company}-${job.role}`" class="relative">
        <span
          class="absolute top-2 -left-[1.95rem] h-3 w-3 rounded-full ring-4 ring-ink md:-left-[2.95rem]"
          :class="job.current ? 'bg-indigo-300' : 'bg-zinc-600'"
          aria-hidden="true"
        ></span>

        <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 class="text-xl font-semibold text-white">
            {{ job.role }}<span class="mx-2 text-zinc-500">·</span
            ><span class="text-indigo-200">{{ job.company }}</span>
          </h3>
          <p class="font-mono text-xs text-zinc-400">
            {{ job.period }}<span class="hidden sm:inline"> · {{ job.location }}</span>
          </p>
        </div>
        <p class="mt-1 font-mono text-xs text-zinc-500 sm:hidden">{{ job.location }}</p>
        <p class="mt-3 max-w-3xl text-zinc-300">{{ job.summary }}</p>

        <ExperienceDetails v-if="job.highlights" :highlights="job.highlights" :stack="job.stack" />

        <div v-if="job.allocations" class="mt-6 space-y-4">
          <article
            v-for="allocation in job.allocations"
            :key="allocation.client"
            class="rounded-xl border border-white/10 bg-surface/80 p-5"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h4 class="font-semibold text-white">
                <span class="text-zinc-500">Alocação ·</span> {{ allocation.client }}
              </h4>
              <p class="font-mono text-xs text-zinc-400">{{ allocation.period }}</p>
            </div>
            <p class="mt-2 text-sm text-zinc-300">{{ allocation.summary }}</p>
            <ExperienceDetails :highlights="allocation.highlights" :stack="allocation.stack" />
          </article>
        </div>
      </li>
    </ol>

    <div class="mt-24">
      <SectionHeading eyebrow="Formação" title="Educação" />
      <ul class="grid gap-4 md:grid-cols-3">
        <li
          v-for="item in education"
          :key="item.course"
          class="flex flex-col rounded-xl border border-white/10 bg-surface/80 p-5"
        >
          <AcademicCapIcon class="h-5 w-5 text-indigo-300" />
          <h3 class="mt-3 font-semibold leading-snug text-white">{{ item.course }}</h3>
          <p class="mt-auto pt-3 text-sm text-zinc-400">{{ item.institution }}</p>
          <p class="font-mono text-xs text-zinc-500">{{ item.period }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { AcademicCapIcon } from '@heroicons/vue/24/outline'

import ExperienceDetails from '@/components/ExperienceDetails.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { education, experiences } from '@/data/profile'
</script>
