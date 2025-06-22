<template>
  <section class="relative bg-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden">

    <div class="relative z-10 p-6 md:p-10 text-white">
      <h2 class="text-3xl font-bold text-white mb-8 text-center">Quem sou Eu?</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-indigo-100">
        <!-- TEXTO -->
        <p class="prose prose-sm sm:prose-base whitespace-pre-line leading-relaxed text-indigo-100">
          Meu nome é <strong class="text-white">Hudson Teles</strong>, sou apaixonado por desenvolver aplicações web de alta
          qualidade com excelente experiência do usuário. Domínio em <strong class="text-white">PHP, Laravel, Vue.js, Node.js, JavaScript, HTML e
          CSS.</strong><br>
          Atuação em plataformas <strong class="text-white">SaaS</strong> voltadas para controladoria de almoxarifado, sistemas financeiros (gestão de
          regras de negócio, emissão de NF-e, movimentação financeira) e gestão de RH/Departamento Pessoal.
          Boa performance em ambientes colaborativos, transformando requisitos em soluções escaláveis. Experiência em
          <strong class="text-white">integração de APIs, design responsivo e práticas de código limpo</strong>. Sempre aberto a aprender e evoluir.
        </p>

        <!-- LISTA -->
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoItem label="Localidade" value="Brasília, DF" icon="map-pin" />
          <InfoItem label="Idade" value="21 anos" icon="calendar" />
          <InfoItem label="Nacionalidade" value="Brasileiro" icon="flag" />
          <InfoItem label="Interesses" value="Academia, Esportes, Música(Bateria)" icon="sparkles" />
          <InfoItem label="Ensino" value="Pós Graduando em Arquitetura e Desenv. de Sistemas" icon="academic-cap" />
          <InfoItem label="Trabalho" value="Grupo Simão Sarkis" icon="building-office" />
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import InfoItem from '@/components/InfoItem.vue'
</script>
