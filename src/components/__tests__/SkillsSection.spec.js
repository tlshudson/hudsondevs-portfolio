import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import SkillsSection from '../SkillsSection.vue'
import { featuredSkills, skillGroups } from '@/data/profile'

describe('SkillsSection', () => {
  const wrapper = mount(SkillsSection)

  it('lists the featured technologies first', () => {
    const featured = wrapper.find('[aria-label="Principais tecnologias"]').findAll('li')
    expect(featured.map((item) => item.text())).toEqual(featuredSkills)
  })

  it('renders every skill group as readable text', () => {
    expect(wrapper.findAll('dt').map((dt) => dt.text())).toEqual(skillGroups.map((g) => g.title))
    expect(wrapper.text()).toContain('LangGraph')
    expect(wrapper.find('[role="progressbar"]').exists()).toBe(false)
  })

  it('highlights featured skills inside their groups', () => {
    const backend = wrapper.find('[aria-label="Back-end"]')
    const symfony = backend.findAll('li').find((li) => li.text() === 'Symfony')
    const fastapi = backend.findAll('li').find((li) => li.text() === 'FastAPI')
    expect(symfony.classes()).toContain('text-indigo-100')
    expect(fastapi.classes()).not.toContain('text-indigo-100')
  })
})
