<template>
  <section class="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Experiência & Educação</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">

      <!-- EXPERIÊNCIA PROFISSIONAL -->
      <div>
        <h3 class="text-2xl font-semibold text-indigo-400 mb-4 flex items-center gap-2">
          <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-6h13V5a2 2 0 00-2-2H9V1L1 9l8 8v-3z" />
          </svg>
          Experiência Profissional
        </h3>
        <ul class="space-y-4">
          <li>
            <div class="font-semibold">Desenvolvedor Junior Full Stack · Grupo Simão Sarkis</div>
            <div class="text-sm text-gray-400">Out 2024 – Atual · Presencial</div>
            <div class="text-sm mt-1">Atuo na manutenção, sugestão e desenvolvimento de sistemas internos voltados ao
              setor hoteleiro, atendendo áreas como Compras, Contabilidade, Financeiro, Almoxarifado, Departamento
              Pessoal e Recursos Humanos. Com foco em usabilidade, desempenho e clareza de código, entrego soluções que
              otimizam rotinas internas.Tecnologias Utilizadas: <br>
              <strong class="text-white">Front-end: Vue.js, JavaScript, Tailwind CSS, Pinia (Vuex), Axios, integração
                com APIs REST (Java), documentadas via Swagger.
                Banco de Dados: Oracle Database, com foco em consultas SQL otimizadas, criação de views e análise de
                dados
                em PL/SQL, além de uso da Oracle Cloud Infrastructure (OCI) para gestão de banco e recursos.</strong>
            </div>
          </li>
          <li>
            <div class="font-semibold">Estagiário em Desenvolvimento Web Full Stack · LS Tecnologia</div>
            <div class="text-sm text-gray-400">Out 2024 – Jan 2025 · Bahia, Remoto</div>
            <div class="text-sm mt-1">Atuação no desenvolvimento web de um sistema ERP voltado à Controladoria
              Hospitalar, em arquitetura multisserviços/microserviços. Responsável por: <br>
              <strong class="text-white">Desenvolvimento de funcionalidades full stack em ambiente SaaS utilizando
                Laravel (back-end) e Vue.js
                (front-end); Criação de componentes reutilizáveis no front-end e integração com APIs RESTful;
                Implementação de endpoints, regras de negócio e operações complexas em PostgreSQL;
                Integração e comunicação entre serviços independentes em ambiente distribuído;
                Adoção de metodologia ágil (Scrum) com gestão de tarefas via JIRA, participação em sprints, planning e
                dailies via Slack; </strong>
            </div>
          </li>
          <li>
            <div class="font-semibold">Suporte Técnico em TI N1 · Grupo Simão Sarkis</div>
            <div class="text-sm text-gray-400">Jun 2024 – Out 2024 · Brasília - DF, Presencial</div>
            <div class="text-sm mt-1">Help Desk T.I, atuando via chamados para realizar o suporte técnico de T.I
              necessário para toda a empresa.
            </div>
          </li>
          <li>
            <div class="font-semibold">Assistente de Operações · Winner Recursos Humanos - <strong>Amazon</strong></div>
            <div class="text-sm text-gray-400">Abr 2023 – Jun 2023 · Brasília - DF, Presencial</div>
            <div class="text-sm mt-1">Auxiliar de Operações prestando serviços temporários para a Id-Logística/AMAZON.
              Treinamento no setor de logística.
            </div>
          </li>
        </ul>
      </div>

      <!-- EDUCAÇÃO -->
      <div>
        <h3 class="text-2xl font-semibold text-indigo-400 mb-4 flex items-center gap-2">
          <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l9-5m-9 5L3 9" />
          </svg>
          Educação
        </h3>
        <ul class="space-y-4">
          <li>
            <div class="font-semibold">Curso Superior de Tecnologia (CST) Análise e Desenvolvimento de Sistemas </div>
            <div class="text-sm text-gray-400">Universidade Paulista - UNIP · 2022 – 2024</div>
            <div class="text-sm mt-1">Estudos práticos em segurança da informação, arquitetura de dados e machine
              learning aplicados em projetos multidisciplinares. Desenvolvimento de aplicações móveis com foco em
              experiência do usuário (UX/UI).
              Graduação focada em Desenvolvimento de software, com sólida base em lógica de programação, engenharia de
              dados e tecnologias emergentes.</div>
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
