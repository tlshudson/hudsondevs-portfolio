<template>
  <section class="bg-gray-800 p-6 rounded-2xl shadow-lg">
    <h2 class="text-3xl font-bold text-white mb-6 text-center">Tech Stack</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
      <div v-for="category in categories" :key="category.title">
        <h3 class="text-xl font-semibold text-indigo-400 mb-2">{{ category.title }}</h3>
        <ul class="space-y-1">
          <li v-for="skill in category.items" :key="skill.name">
            {{ skill.name }}
            <div
              class="mt-2 flex items-center gap-x-1"
              role="progressbar"
              :aria-label="skill.name"
              aria-valuemin="0"
              :aria-valuemax="MAX_LEVEL"
              :aria-valuenow="skill.level"
            >
              <div
                v-for="step in MAX_LEVEL"
                :key="step"
                class="w-full h-2.5 transition duration-500"
                :class="step <= skill.level ? 'bg-indigo-600' : 'bg-neutral-600'"
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const MAX_LEVEL = 10

const categories = [
  {
    title: 'Front-End',
    items: [
      { name: 'React/React Native', level: 8 },
      { name: 'JavaScript', level: 9 },
      { name: 'Next.Js', level: 7 },
      { name: 'TypeScript', level: 7 },
      { name: 'Vue.Js', level: 4 },
    ],
  },
  {
    title: 'Back-End',
    items: [
      { name: 'Laravel', level: 9 },
      { name: 'PHP', level: 9 },
      { name: 'Node.js', level: 7 },
      { name: 'RESTful APIs & API versioning', level: 8 },
      { name: 'Autenticação e Autorização (JWT, OAuth2)', level: 8 },
    ],
  },
  {
    title: 'Banco de Dados',
    items: [
      { name: 'PL/SQL', level: 8 },
      { name: 'PostgreSQL (Views, Triggers, Functions)', level: 9 },
      { name: 'SQLite', level: 4 },
      { name: 'MySQL / MariaDB', level: 8 },
    ],
  },
  {
    title: 'Noções DevOps e Infraestrutura',
    items: [
      { name: 'Docker (Docker Compose, Multi-stage builds)', level: 7 },
      { name: 'Git & GitHub (Fluxo Git Flow, GitHub Actions)', level: 9 },
      { name: 'CI/CD (GitHub Actions, GitLab CI, Jenkins)', level: 9 },
      { name: 'Nginx / Apache', level: 7 },
    ],
  },
  {
    title: 'Outras Ferramentas e Habilidades',
    items: [
      { name: 'WordPress (Temas, Plugins, CPTs)', level: 4 },
      { name: 'Swagger / Postman (Documentação e Testes de API)', level: 8 },
      { name: 'Jira / Trello (Kanban, Scrum)', level: 9 },
      { name: 'Linux (bash, permissão, cron)', level: 9 },
    ],
  },
]
</script>
