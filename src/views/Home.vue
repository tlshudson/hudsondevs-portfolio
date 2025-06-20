<template>
  <MatrixRain class="fixed inset-0 -z-10" />
  <div class="space-y-16 p-4 md:p-8 relative">

    <section class="relative rounded-2xl shadow-lg overflow-hidden bg-cover bg-center text-white">
      <!-- ANIMAÇÃO DE PARTÍCULAS -->

      <div class="relative z-10 flex flex-col items-center text-center gap-6 py-12 px-6 md:px-16">

        <!-- FOTO DO DESENVOLVEDOR -->
        <img src="@/assets/DeveloperHudson.jpeg" alt="Hudson Teles"
          class="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-black shadow-xl" />

        <!-- TEXTO DE APRESENTAÇÃO -->
        <div class="max-w-2xl">
          <h2 class="text-4xl font-extrabold mb-2">
            Hudson <span class="text-indigo-300">Teles</span>
          </h2>
          <p class="text-gray-200 text-base md:text-lg leading-relaxed">
            Full-Stack Developer | Laravel & Vue.js Expert | Node.js Enthusiast | Oracle Cloud Professional | Agile/Scrum
          </p>
        </div>

        <!-- LINKS DE REDES -->
        <div class="flex flex-wrap justify-center gap-4 mt-2">
          <a href="https://github.com/tlshudson" target="_blank" class="text-white hover:text-indigo-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583v-2.256c-3.338.726-4.033-1.416-4.033-1.416-.546-1.38-1.333-1.747-1.333-1.747-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.306.763-1.606-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.404 1.02.005 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.921.431.372.815 1.104.815 2.222v3.293c0 .32.218.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z">
              </path>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/hudson-teles-381a451ab/" target="_blank" class="text-white hover:text-indigo-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8.12 20.452h-3.577v-11.54h3.577v11.54zM6.331 7.931c-1.144 0-1.938-.796-1.938-1.789 0-1.012.814-1.79 1.976-1.79 1.162 0 1.939.778 1.958 1.79 0 .993-.796 1.789-1.996 1.789zM20.452 20.452h-3.577v-5.99c0-1.507-.54-2.537-1.888-2.537-1.03 0-1.644.692-1.915 1.361-.099.242-.124.582-.124.922v6.244h-3.577s.048-10.127 0-11.54h3.577v1.635c.475-.732 1.324-1.777 3.22-1.777 2.35 0 4.103 1.535 4.103 4.832v6.85z">
              </path>
            </svg>
          </a>
        </div>

        <!-- BOTÕES DE AÇÃO -->
        <div class="flex flex-wrap justify-center gap-4 mt-4">
          <a href="Curriculum_HudsonTeles_Tecnologia.pdf" download
            class="flex items-center gap-2 bg-white text-indigo-700 font-semibold px-4 py-2 rounded hover:bg-gray-100">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H6l-3 3V4z" />
            </svg>
            Baixar Currículo
          </a>

          <a href="#contact"
            class="flex items-center gap-2 border border-white text-white px-4 py-2 rounded hover:bg-indigo-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 10.5a8.38 8.38 0 01-.9 3.8l-1.35 2.7a1 1 0 01-.88.5H6a1 1 0 01-.88-.5l-1.35-2.7A8.38 8.38 0 013 10.5V5a2 2 0 012-2h14a2 2 0 012 2v5.5z" />
            </svg>
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>

    <AboutMe />
    <Skills />
    <ExperienceEducation />
    <Projects />
    <ContactMe />
  </div>
</template>

<script setup>
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import ExperienceEducation from '@/components/ExperienceEducation.vue'
import Projects from '@/components/Projects.vue'
import ContactMe from '@/components/ContactMe.vue'
import MatrixRain from '@/components/MatrixRain.vue'
</script>
