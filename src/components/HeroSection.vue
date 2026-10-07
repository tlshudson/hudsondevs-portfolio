<template>
  <section
    id="inicio"
    class="grid items-center gap-12 pt-16 pb-20 md:grid-cols-[1.4fr_1fr] md:pt-24 md:pb-28"
  >
    <div>
      <p class="font-mono text-xs tracking-widest text-indigo-300 uppercase">{{ hero.eyebrow }}</p>
      <h1 class="mt-4 text-5xl font-bold tracking-tighter text-white md:text-7xl">
        Hudson <span class="text-indigo-300">Teles</span>
      </h1>
      <p class="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 md:text-xl">
        {{ hero.headline }}
      </p>

      <ul class="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-zinc-400">
        <li v-for="fact in hero.facts" :key="fact" class="flex items-center gap-2">
          <span class="h-1 w-1 rounded-full bg-indigo-300"></span>{{ fact }}
        </li>
      </ul>

      <div class="mt-9 flex flex-wrap items-center gap-3">
        <a
          href="#contato"
          class="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/60 transition hover:bg-indigo-400 active:scale-[0.98]"
        >
          Vamos conversar
        </a>
        <a
          :href="contacts.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-emerald-400/60 hover:bg-emerald-400/10 active:scale-[0.98]"
        >
          <BrandIcon name="whatsapp" class="h-4 w-4" />
          WhatsApp
        </a>

        <div class="ml-1 flex items-center gap-1">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :target="social.external ? '_blank' : undefined"
            :rel="social.external ? 'noopener noreferrer' : undefined"
            :aria-label="social.label"
            class="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <component :is="social.icon" v-bind="social.props" class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>

    <div class="relative mx-auto w-60 md:w-full md:max-w-xs">
      <div
        class="absolute -inset-3 rounded-[2rem] bg-indigo-500/15 blur-2xl"
        aria-hidden="true"
      ></div>
      <img
        src="@/assets/hudson-teles.jpg"
        alt="Foto de Hudson Teles"
        width="320"
        height="400"
        class="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top ring-1 ring-white/15"
      />
    </div>
  </section>
</template>

<script setup>
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

import BrandIcon from '@/components/BrandIcon.vue'
import { contacts, hero } from '@/data/profile'

const socials = [
  {
    label: 'GitHub',
    href: contacts.github,
    icon: BrandIcon,
    props: { name: 'github' },
    external: true,
  },
  {
    label: 'LinkedIn',
    href: contacts.linkedin,
    icon: BrandIcon,
    props: { name: 'linkedin' },
    external: true,
  },
  {
    label: 'E-mail',
    href: `mailto:${contacts.email}`,
    icon: EnvelopeIcon,
    props: {},
    external: false,
  },
]
</script>
