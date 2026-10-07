<template>
  <section id="contato" class="py-20">
    <SectionHeading
      eyebrow="Contato"
      title="Vamos conversar"
      description="Tem um projeto, uma vaga ou uma dúvida sobre algo que desenvolvi? Envie uma mensagem pelo formulário ou fale comigo diretamente."
    />

    <div class="grid gap-10 md:grid-cols-[1fr_1.6fr]">
      <ul class="space-y-3 text-sm">
        <li v-for="channel in channels" :key="channel.label">
          <a
            :href="channel.href"
            :target="channel.external ? '_blank' : undefined"
            :rel="channel.external ? 'noopener noreferrer' : undefined"
            class="group flex items-center gap-3 rounded-xl border border-white/10 bg-surface/80 p-4 transition-colors hover:border-indigo-300/40"
          >
            <component
              :is="channel.icon"
              v-bind="channel.props"
              class="h-5 w-5 shrink-0 text-indigo-300"
            />
            <span>
              <span class="block font-medium text-white">{{ channel.label }}</span>
              <span class="block break-all text-zinc-400">{{ channel.value }}</span>
            </span>
          </a>
        </li>
      </ul>

      <form class="space-y-4" novalidate @submit.prevent="handleSubmit">
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label for="contact-name" :class="labelClass">Nome</label>
            <input
              id="contact-name"
              v-model.trim="form.name"
              name="name"
              type="text"
              autocomplete="name"
              required
              :class="fieldClass"
            />
          </div>
          <div>
            <label for="contact-email" :class="labelClass">E-mail</label>
            <input
              id="contact-email"
              v-model.trim="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required
              :class="fieldClass"
            />
          </div>
        </div>
        <div>
          <label for="contact-title" :class="labelClass">Assunto</label>
          <input
            id="contact-title"
            v-model.trim="form.title"
            name="title"
            type="text"
            required
            :class="fieldClass"
          />
        </div>
        <div>
          <label for="contact-message" :class="labelClass">Mensagem</label>
          <textarea
            id="contact-message"
            v-model.trim="form.message"
            name="message"
            rows="5"
            required
            :class="fieldClass"
          ></textarea>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            :disabled="status === 'sending'"
            class="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-400 active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
          >
            {{ status === 'sending' ? 'Enviando…' : 'Enviar mensagem' }}
          </button>
          <p v-if="feedback" role="status" class="text-sm" :class="feedback.tone">
            {{ feedback.text }}
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

import emailjs from '@emailjs/browser'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

import BrandIcon from '@/components/BrandIcon.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { contacts } from '@/data/profile'

const EMAILJS_SERVICE_ID = 'service_2pdfhgh'
const EMAILJS_TEMPLATE_ID = 'template_u6r26gj'
const EMAILJS_PUBLIC_KEY = '_OAWQii4qk_UUDSE3'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const labelClass = 'mb-1.5 block text-sm text-zinc-300'
const fieldClass =
  'w-full rounded-lg border border-white/10 bg-ink/80 px-3 py-2.5 text-white placeholder-zinc-500 transition-colors focus:border-indigo-300/60 focus:outline-none'

const channels = [
  {
    label: 'E-mail',
    value: contacts.email,
    href: `mailto:${contacts.email}`,
    icon: EnvelopeIcon,
    props: {},
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'Hudson Teles',
    href: contacts.linkedin,
    icon: BrandIcon,
    props: { name: 'linkedin' },
    external: true,
  },
  {
    label: 'GitHub',
    value: 'tlshudson',
    href: contacts.github,
    icon: BrandIcon,
    props: { name: 'github' },
    external: true,
  },
  {
    label: 'WhatsApp',
    value: 'Conversar agora',
    href: contacts.whatsapp,
    icon: BrandIcon,
    props: { name: 'whatsapp' },
    external: true,
  },
]

const form = reactive({ name: '', email: '', title: '', message: '' })
const status = ref('idle')
const validationError = ref('')

const feedback = computed(() => {
  if (validationError.value) return { text: validationError.value, tone: 'text-amber-300' }
  if (status.value === 'success')
    return { text: 'Mensagem enviada. Respondo assim que possível.', tone: 'text-emerald-300' }
  if (status.value === 'error')
    return {
      text: `Não consegui enviar agora. Tente novamente ou escreva para ${contacts.email}.`,
      tone: 'text-red-300',
    }
  return null
})

async function handleSubmit() {
  validationError.value = ''
  if (!form.name || !form.title || !form.message) {
    validationError.value = 'Preencha todos os campos.'
    return
  }
  if (!EMAIL_PATTERN.test(form.email)) {
    validationError.value = 'Informe um e-mail válido.'
    return
  }

  status.value = 'sending'
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      { from_name: form.name, reply_to: form.email, subject: form.title, message: form.message },
      { publicKey: EMAILJS_PUBLIC_KEY },
    )
    Object.assign(form, { name: '', email: '', title: '', message: '' })
    status.value = 'success'
  } catch (error) {
    console.error('EmailJS send failed', error)
    status.value = 'error'
  }
}
</script>
