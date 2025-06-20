<template>
  <section class="bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg mt-10">
    <h2 class="text-3xl font-bold text-white mb-4 text-center">Entre em Contato</h2>
    <p class="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
      Deseja fazer algum projeto? Dúvidas sobre algo que desenvolvi? Me manda por e-mail ou use o formulário abaixo para falar comigo.
    </p>

    <div class="flex flex-col md:flex-row justify-center items-start gap-10">
      <!-- LINKS -->
      <div class="flex flex-col gap-4 w-full md:w-1/3">
        <a href="mailto:hudsonteles00@gmail.com" class="text-indigo-400 hover:underline break-all">
          📧 hudsonteles00@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/hudson-teles-381a451ab/" target="_blank" class="text-indigo-400 hover:underline">
          🔗 LinkedIn: Hudson Teles
        </a>
        <a href="https://github.com/tlshudson" target="_blank" class="text-indigo-400 hover:underline">
          💻 GitHub: Hudson Gustavo
        </a>
      </div>

      <!-- FORMULÁRIO -->
      <form @submit.prevent="handleSubmit" class="w-full md:w-2/3 space-y-4">
        <div>
          <label class="block text-sm text-gray-300 mb-1">Nome</label>
          <input v-model="form.name" type="text" required class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>
        <div>
          <label class="block text-sm text-gray-300 mb-1">E-mail</label>
          <input v-model="form.email" type="email" required class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        </div>
        <div>
          <label class="block text-sm text-gray-300 mb-1">Mensagem</label>
          <textarea v-model="form.message" rows="4" required class="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"></textarea>
        </div>
        <button type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded font-semibold transition-colors">
          Enviar Mensagem
        </button>
        <p v-if="success" class="text-green-400 mt-2">Mensagem enviada com sucesso! 🎉</p>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      success: false
    }
  },
  methods: {
    handleSubmit() {
      // Aqui pode integrar com um serviço de envio real (Ex: Formspree, EmailJS, etc.)
      console.log('Formulário enviado:', this.form)
      this.success = true
      setTimeout(() => {
        this.success = false
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
      }, 3000)
    }
  }
}
</script>
