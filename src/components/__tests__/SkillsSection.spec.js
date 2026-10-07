import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import SkillsSection from '../SkillsSection.vue'

describe('SkillsSection', () => {
  const wrapper = mount(SkillsSection)

  it('renders every skill category', () => {
    const titles = wrapper.findAll('h3').map((h3) => h3.text())
    expect(titles).toEqual([
      'Front-End',
      'Back-End',
      'Banco de Dados',
      'Noções DevOps e Infraestrutura',
      'Outras Ferramentas e Habilidades',
    ])
  })

  it('fills one segment per level out of ten', () => {
    const bar = wrapper.find('[aria-label="Vue.Js"]')
    expect(bar.attributes('aria-valuenow')).toBe('4')
    expect(bar.findAll('div')).toHaveLength(10)
    expect(bar.findAll('.bg-indigo-600')).toHaveLength(4)
    expect(bar.findAll('.bg-neutral-600')).toHaveLength(6)
  })
})
