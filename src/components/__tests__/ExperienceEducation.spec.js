import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import ExperienceEducation from '../ExperienceEducation.vue'

describe('ExperienceEducation', () => {
  const wrapper = mount(ExperienceEducation)

  it('shows VitruTech as a Softtek allocation, not as an employer', () => {
    const softtek = wrapper
      .findAll('ol > li')
      .find((li) => li.find('h3').text().includes('Softtek'))
    const allocations = softtek.findAll('article h4').map((h4) => h4.text())
    expect(allocations.some((text) => text.includes('VitruTech'))).toBe(true)
    const employers = wrapper.findAll('ol > li h3').map((h3) => h3.text())
    expect(employers.some((text) => text.includes('VitruTech'))).toBe(false)
  })

  it('lists Cogmo Technology as a current position', () => {
    expect(wrapper.find('ol > li h3').text()).toContain('Cogmo Technology')
  })
})
