<template>
  <section class="relative bg-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden">
    <div class="relative z-10 p-6 md:p-10 text-white">
      <h2 class="text-3xl font-bold text-white mb-8 text-center">Quem sou Eu?</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-indigo-100">
        <!-- TEXTO -->
        <p class="prose prose-sm sm:prose-base whitespace-pre-line leading-relaxed text-indigo-100">
          Sou um desenvolvedor Full-Stack com
          <strong class="text-white">visão arquitetural</strong>, apaixonado por transformar
          requisitos de negócio em
          <strong class="text-white">soluções escaláveis e de alta performance</strong>. Minha
          trajetória inclui mais de <strong class="text-white">5 anos de experiência</strong> e
          atuação em sistemas corporativos críticos (SaaS, Financeiro, RH, Healtechs), utilizando
          metodologias ágeis (Scrum/Kanban).

          <strong class="text-white">Minha expertise técnica se concentra em:<br /></strong>

          <strong class="text-white">Back-End Robustos:</strong> Sólido domínio em
          <strong class="text-white">PHP (Laravel)</strong> e
          <strong class="text-white">JavaScript - Node.js</strong>, focado no desenvolvimento de
          APIs RESTful e na manutenção de sistemas legados.<br />

          <strong class="text-white">Front-End Moderno:</strong> Proficiência em frameworks reativos
          como <strong class="text-white">React.js</strong> e
          <strong class="text-white">Next, TypeScript</strong>, garantindo excelente UX e design
          responsivo.<br />

          <strong class="text-white">Cloud e DevOps:</strong> Experiência prática em ambientes
          <strong class="text-white">Cloud - Oracle Cloud Infrastructure</strong>, com foco em
          observabilidade, segurança e suporte na manutenção de ambientes de
          homologação/produção.<br />

          <strong class="text-white">Banco de Dados:</strong> Forte base em bancos de dados
          relacionais (MySQL, PostgreSQL) e um
          <strong class="text-white">diferencial no domínio de Oracle Database (PL/SQL)</strong>
          para consultas complexas e otimização.<br />

          <strong class="text-white">Qualidade de Código:</strong> Prática consolidada em
          <strong class="text-white">Clean Code</strong>, arquitetura (como Micro-serviços) e adoção
          de testes automatizados (TDD em Front-end) para garantir a manutenibilidade do sistema.<br />
          <strong class="text-white"
            >Vamos conversar sobre como posso otimizar seu próximo projeto? 🤝</strong
          >
        </p>

        <!-- LISTA -->
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoItem label="Localidade" value="Brasília, DF" icon="map-pin" />
          <InfoItem label="Idade" value="21 anos" icon="calendar" />
          <InfoItem label="Nacionalidade" value="Brasileiro" icon="flag" />
          <InfoItem
            label="Interesses"
            value="Academia, Esportes, Música(Bateria)"
            icon="sparkles"
          />
          <InfoItem
            label="Ensino"
            value="Pós Graduando em Arquitetura e Desenv. de Sistemas, Pós Graduando em Desenv. Full Stack & Cloud Computing"
            icon="academic-cap"
          />
          <InfoItem label="Trabalho" value="Remoto" icon="building-office" />
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import InfoItem from '@/components/InfoItem.vue'
</script>
