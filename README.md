# Portfólio — Hudson Teles

Portfólio profissional publicado em https://hudsondev.netlify.app/.

## Stack

- Vue 3 com `<script setup>` e Vite
- Tailwind CSS 4
- EmailJS (`@emailjs/browser`) para o formulário de contato
- Vitest e Vue Test Utils

## Estrutura

```text
src/
├── App.vue                 # Raiz da aplicação
├── views/HomeView.vue      # Página única com todas as seções
├── components/             # Seções (Sobre, Tech Stack, Projetos, Experiência, Contato)
│   └── __tests__/          # Testes unitários
└── assets/                 # Estilos e imagens processadas pelo Vite
public/                     # Arquivos servidos sem processamento (currículo, capas de projetos)
```

## Comandos

```sh
npm install         # instala as dependências
npm run dev         # servidor de desenvolvimento
npm run build       # build de produção em dist/
npm run preview     # serve o build localmente
npm run test:unit   # testes unitários
npm run lint        # ESLint com correção automática
npm run format      # Prettier em src/
```
