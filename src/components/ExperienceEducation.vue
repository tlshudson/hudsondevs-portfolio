<template>
  <section class="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Experiência & Educação</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">

      <!-- EXPERIÊNCIA PROFISSIONAL -->
      <div>
        <h3 class="text-2xl font-semibold text-indigo-400 mb-4 flex items-center gap-2">
          <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 17v-6h13V5a2 2 0 00-2-2H9V1L1 9l8 8v-3z" />
          </svg>
          Experiência Profissional
        </h3>
        <ul class="space-y-4">
          <li>
            <div class="font-semibold">Desenvolvedor Front-End · Freelance</div>
            <div class="text-sm text-gray-400">Jan 2023 – Atual · Remoto</div>
            <div class="text-sm mt-1">Criação de interfaces web modernas com Vue.js, Tailwind e animações interativas.</div>
          </li>
          <li>
            <div class="font-semibold">Estagiário em Desenvolvimento Web · TechCorp</div>
            <div class="text-sm text-gray-400">Ago 2022 – Dez 2022 · Brasília, DF</div>
            <div class="text-sm mt-1">Participação em projetos internos e aprendizado de boas práticas com equipe sênior.</div>
          </li>
        </ul>
      </div>

      <!-- EDUCAÇÃO -->
      <div>
        <h3 class="text-2xl font-semibold text-indigo-400 mb-4 flex items-center gap-2">
          <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l9-5m-9 5L3 9" />
          </svg>
          Educação
        </h3>
        <ul class="space-y-4">
          <li>
            <div class="font-semibold">Graduação em Análise e Desenvolvimento de Sistemas</div>
            <div class="text-sm text-gray-400">Instituto Federal – IFB · 2021 – 2023</div>
            <div class="text-sm mt-1">Formação voltada à criação de soluções web, mobile e análise de sistemas.</div>
          </li>
          <li>
            <div class="font-semibold">Formação Full Stack Developer</div>
            <div class="text-sm text-gray-400">Rocketseat · 2023</div>
            <div class="text-sm mt-1">Cursos avançados em JavaScript, Vue, Node.js e integração de APIs.</div>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name:
    'ExperienceEducation',
}
</script>
