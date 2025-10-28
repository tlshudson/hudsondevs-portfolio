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
            Full-Stack Developer | PHP/Laravel, React & Next.js Specialist | Multi-Cloud (AWS, GCP, OCI) | Focused on Performance and Innovative Solutions
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

          <a href="https://www.linkedin.com/in/hudson-teles-381a451ab/" target="_blank"
            class="text-white hover:text-indigo-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8.12 20.452h-3.577v-11.54h3.577v11.54zM6.331 7.931c-1.144 0-1.938-.796-1.938-1.789 0-1.012.814-1.79 1.976-1.79 1.162 0 1.939.778 1.958 1.79 0 .993-.796 1.789-1.996 1.789zM20.452 20.452h-3.577v-5.99c0-1.507-.54-2.537-1.888-2.537-1.03 0-1.644.692-1.915 1.361-.099.242-.124.582-.124.922v6.244h-3.577s.048-10.127 0-11.54h3.577v1.635c.475-.732 1.324-1.777 3.22-1.777 2.35 0 4.103 1.535 4.103 4.832v6.85z">
              </path>
            </svg>
          </a>
          <a href="mailto:hudsonteles00@gmail.com?subject=Oportunidade%20para%20Desenvolvedor&body=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20de%20trabalho%20para%20desenvolvedor."
            class="text-white hover:text-indigo-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l8 6 8-6V18H4z" />
            </svg>
          </a>

        </div>

        <!-- BOTÕES DE AÇÃO -->
        <div class="flex flex-wrap justify-center gap-4 mt-4">
          <a href="Hudson_Tecnologia.pdf" download
            class="flex items-center gap-2 bg-white text-indigo-700 font-semibold px-4 py-2 rounded hover:bg-gray-100">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v10a1 1 0 01-1 1H6l-3 3V4z" />
            </svg>
            Baixar Currículo
          </a>

          <a href="https://wa.me/5561985559961?text=Ol%C3%A1%2C%20gostaria%20de%20oferecer%20uma%20oferta%20para%20desenvolvedor%20de%20software"
            target="_blank"
            class="flex items-center gap-2 border border-white text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            <svg class="w-5 h-5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path
                d="M16.003 2.667C8.648 2.667 2.67 8.645 2.67 16c0 2.803.826 5.422 2.252 7.628L2 30l6.513-2.002A13.257 13.257 0 0 0 16.003 29.334c7.355 0 13.333-5.978 13.333-13.334 0-7.354-5.978-13.333-13.333-13.333zm.014 23.546a11.145 11.145 0 0 1-5.683-1.559l-.408-.242-3.87 1.19 1.19-3.766-.265-.437a11.075 11.075 0 0 1-1.712-5.946c0-6.144 5.001-11.146 11.146-11.146 2.978 0 5.778 1.16 7.88 3.262 2.102 2.102 3.266 4.902 3.266 7.88 0 6.145-5.002 11.146-11.144 11.146zm6.114-8.43c-.335-.168-1.985-.978-2.294-1.09-.308-.113-.533-.168-.757.168s-.868 1.09-1.065 1.314c-.196.223-.387.252-.722.084-.335-.168-1.413-.521-2.69-1.663-.993-.886-1.664-1.978-1.859-2.313-.196-.336-.021-.518.147-.686.151-.15.335-.387.502-.58.168-.195.224-.336.335-.56.112-.224.056-.42-.028-.588-.084-.167-.757-1.827-1.037-2.501-.272-.653-.548-.56-.757-.57l-.647-.012c-.224 0-.588.084-.896.42-.308.336-1.18 1.15-1.18 2.807s1.208 3.256 1.375 3.48c.168.224 2.38 3.633 5.772 5.093 3.392 1.46 3.392.973 4.004.912.612-.056 1.984-.807 2.266-1.587.28-.78.28-1.447.196-1.587-.084-.14-.308-.223-.643-.391z" />
            </svg>
            Falar no WhatsApp
          </a>

        </div>
      </div>
    </section>

    <AboutMe />
    <Skills />
    <Projects />
    <ExperienceEducation />
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

<style>
html {
  scroll-behavior: smooth;
}
</style>
