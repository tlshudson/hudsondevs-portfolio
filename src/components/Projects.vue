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
        <h3 class="text-xl font-semibold text-indigo-400 mb-2">{{ project.title }}</h3>
        <p class="text-sm text-gray-400">{{ project.description }}</p>
      </div>
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
          title: 'Portfólio Profissional',
          description: 'Site pessoal com tema dark, responsivo e com animações suaves feito em Vue.js + Tailwind.',
          cover: 'https://via.placeholder.com/300x200?text=Projeto+1'
        },
        {
          title: 'Landing Page Produto X',
          description: 'Página de vendas com foco em conversão, layout otimizado para mobile.',
          cover: 'https://via.placeholder.com/300x200?text=Projeto+2'
        },
        {
          title: 'Dashboard de Análises',
          description: 'Interface interativa com gráficos em tempo real, dados simulados via API fake.',
          cover: 'https://via.placeholder.com/300x200?text=Projeto+3'
        }
      ]
    };
  }
}
</script>
