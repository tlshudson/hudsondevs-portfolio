import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'

vi.mock('@emailjs/browser', () => ({ default: { send: vi.fn() } }))

import emailjs from '@emailjs/browser'
import ContactMe from '../ContactMe.vue'

async function fillAndSubmit(wrapper, email = 'ana@example.com') {
  await wrapper.find('#contact-name').setValue('Ana')
  await wrapper.find('#contact-email').setValue(email)
  await wrapper.find('#contact-title').setValue('Vaga')
  await wrapper.find('#contact-message').setValue('Olá')
  await wrapper.find('form').trigger('submit')
  await flushPromises()
}

describe('ContactMe', () => {
  afterEach(() => vi.clearAllMocks())

  it('rejects an invalid e-mail without sending', async () => {
    const wrapper = mount(ContactMe)
    await fillAndSubmit(wrapper, 'invalido')
    expect(emailjs.send).not.toHaveBeenCalled()
    expect(wrapper.find('[role="status"]').text()).toContain('e-mail válido')
  })

  it('shows an inline confirmation and clears the form after sending', async () => {
    emailjs.send.mockResolvedValue({ status: 200 })
    const wrapper = mount(ContactMe)
    await fillAndSubmit(wrapper)
    expect(emailjs.send).toHaveBeenCalledOnce()
    expect(wrapper.find('[role="status"]').text()).toContain('Mensagem enviada')
    expect(wrapper.find('#contact-name').element.value).toBe('')
  })

  it('keeps the message and explains the failure when sending fails', async () => {
    emailjs.send.mockImplementation(() => Promise.reject(new Error('network')))
    const wrapper = mount(ContactMe)
    await fillAndSubmit(wrapper)
    expect(wrapper.find('[role="status"]').text()).toContain('Não consegui enviar')
    expect(wrapper.find('#contact-message').element.value).toBe('Olá')
  })
})
