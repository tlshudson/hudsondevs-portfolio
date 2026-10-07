<template>
  <header class="sticky top-0 z-20 border-b border-white/5 bg-ink/70 backdrop-blur-md">
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 md:px-8"
      aria-label="Navegação principal"
    >
      <a
        href="#inicio"
        class="font-mono text-sm font-medium text-white transition-colors hover:text-indigo-300"
      >
        hudson<span class="text-indigo-300">.dev</span>
      </a>

      <ul class="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="transition-colors hover:text-white">{{ link.label }}</a>
        </li>
      </ul>

      <a
        :href="contacts.resume"
        download
        class="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white transition hover:border-indigo-300/60 hover:bg-indigo-400/10 active:scale-[0.98]"
      >
        <ArrowDownTrayIcon class="h-4 w-4" />
        Currículo
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'

import { contacts } from '@/data/profile'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]
</script>
