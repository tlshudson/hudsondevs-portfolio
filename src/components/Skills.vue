<template>
  <section class="bg-gray-800 p-6 rounded-2xl shadow-lg">
    <h2 class="text-3xl font-bold text-white mb-6">Tech Stack</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">

      <div>
        <h3 class="text-xl font-semibold text-indigo-400 mb-2">Front-End</h3>
        <ul class="space-y-1">
          <li>Vue.js</li>
          <li>TypeScript</li>
          <li>React</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-indigo-400 mb-2">Back-End</h3>
        <ul class="space-y-1">
          <li>Laravel</li>
          <li>PHP</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-indigo-400 mb-2">Banco de Dados</h3>
        <ul class="space-y-1">
          <li>Oracle</li>
          <li>PL/SQL</li>
          <li>MySQL / PostgreSQL</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-indigo-400 mb-2">Outros</h3>
        <ul class="space-y-1">
          <li>Linux &amp; Web Servers</li>
          <li>DevOps Básico (CI/CD, GitHub Actions)</li>
          <li>WordPress, Docker, Frameworks diversos</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name:
    // eslint-disable-next-line vue/multi-word-component-names
    'Skills',
}
</script>
