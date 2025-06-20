<template>
    <section class="relative bg-gray-800 p-6 rounded-2xl shadow-lg overflow-hidden">

    <div class="relative z-10 p-6 md:p-10 text-white">
      <h2 class="text-3xl font-bold mb-6">Sobre mim</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-indigo-100">
        <!-- TEXTO -->
        <p class="prose prose-sm sm:prose-base whitespace-pre-line leading-relaxed text-indigo-100">
          Meu nome é <strong class="text-white">Hudson Teles</strong>, sou formado em Análise e Desenvolvimento de Sistemas, graduando em e atuo como Desenvolvedor Full Stack.
          Tenho experiência com <strong class="text-indigo-200">Java, Spring Boot, Vue.js, Tailwind, Bootstrap, OracleSQL, WordPress, Linux (Ubuntu e Oracle Linux)</strong> e mais.

          <br><br>

          Fora do trabalho, curto trilhas, games, estudar programação, ver eventos de carros... Atualmente estou na pós-graduação em <strong class="text-indigo-200">Engenharia de Software</strong> e buscando novos desafios para crescer na área.
        </p>

        <!-- LISTA -->
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoItem label="Localidade" value="Brasília, DF" icon="map-pin" />
          <InfoItem label="Idade" value="21 anos" icon="calendar" />
          <InfoItem label="Nacionalidade" value="Brasileiro" icon="flag" />
          <InfoItem label="Interesses" value="Games, Carros, Séries" icon="sparkles" />
          <InfoItem label="Ensino" value="Análise e Des. de Sistemas" icon="academic-cap" />
          <InfoItem label="Trabalho" value="Grupo Simão Sarkis" icon="building-office" />
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import InfoItem from '@/components/InfoItem.vue'
</script>
