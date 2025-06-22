<template>
  <section class="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg mt-10">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Projetos em Destaque</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-gray-700 rounded-xl p-5 hover:shadow-2xl transition-shadow duration-300"
      >
        <img :src="project.cover" alt="Capa do projeto" class="rounded-lg mb-4 object-cover h-40 w-full" />
        <a :href="project.link" class="text-xl font-semibold text-indigo-400 mb-2"><u>{{ project.title }}</u></a>
        <p class="text-sm text-gray-400">{{ project.description }}</p>
      </div>
    </div>
    <div class="mt-10 text-center">
  <a
    href="https://github.com/tlshudson"
    target="_blank"
    rel="noopener"
    class="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-md transition duration-300"
  >
    Ver todos os projetos no GitHub
  </a>
</div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'Controle de Estoque - Em Andamento',
          description: 'Interface frontend para o sistema de controle de estoque SEG Estoque, desenvolvida em Vue 3 com Vite.',
          cover: '/src/assets/sga.png',
          link: 'https://github.com/tlshudson/SGA-ESTOQUE'
        },
        {
          title: 'RoyalPark - Finalizado',
          description: 'Interface frontend para o sistema de controle de estoque SEG Estoque, desenvolvida em Vue 3 com Vite.',
          cover: 'src/assets/royalpark.png',
          link: 'https://github.com/tlshudson/royal_park'
        },
        {
          title: 'Controle de Pontos - Finalizado',
          description: 'Projeto construído em conjunto com Udemy.com/Cod3r-cursos. Tem como objetivo automatizar os batimentos de ponto dos funcionários de uma empresa.',
          cover: '/src/assets/innout.png',
          link: 'https://github.com/tlshudson/innout2'
        }
      ]
    };
  }
}
</script>
