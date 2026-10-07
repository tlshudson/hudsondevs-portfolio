<template>
  <a
    href="#conteudo"
    class="sr-only z-30 rounded-lg bg-indigo-500 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
  >
    Pular para o conteúdo
  </a>
  <MatrixRain />
  <SiteHeader />

  <main id="conteudo" class="mx-auto max-w-6xl px-5 md:px-8">
    <HeroSection />
    <AboutMe />
    <SkillsSection />
    <ExperienceEducation />
    <ProjectsSection />
    <ContactMe />
  </main>

  <SiteFooter />
</template>

<script setup>
import AboutMe from '@/components/AboutMe.vue'
import ContactMe from '@/components/ContactMe.vue'
import ExperienceEducation from '@/components/ExperienceEducation.vue'
import HeroSection from '@/components/HeroSection.vue'
import MatrixRain from '@/components/MatrixRain.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SkillsSection from '@/components/SkillsSection.vue'
</script>
