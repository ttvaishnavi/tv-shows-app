import { shallowMount } from '@vue/test-utils'
import SeasonsTab from '@/components/SeasonsTab.vue'

describe('SeasonsTab.vue', () => {
  let wrapper

  beforeEach(() => {
    const episodes = [
      {
        id: 1,
        season: 1,
        name: 'Episode 1',
        summary: '<p>Summary of episode 1</p>',
        image: {
          medium: 'image1'
        }
      },
      {
        id: 2,
        season: 1,
        name: 'Episode 2',
        summary: '<p>Summary of episode 2</p>',
        image: {
          medium: 'image2'
        }
      },
      {
        id: 3,
        season: 2,
        name: 'Episode 1',
        summary: '<p>Summary of episode 1 season 2</p>',
        image: {
          medium: 'image1'
        }
      }
    ]
    wrapper = shallowMount(SeasonsTab, {
      propsData: {
        episodes: episodes
      }
    })
  })
  it('Renders a list of seasons and episodes', () => {
    wrapper.vm.setActiveSeason(0)
    expect(wrapper.findAll('.nav-link')).toHaveLength(2)
    expect(wrapper.find('.nav-link').text()).toBe('Season 1')
    expect(wrapper.findAll('.tab-content')).toHaveLength(2)
  })
  it('Switches between tabs when the onclick event triggers', async () => {
    const navTabs = wrapper.findAll('.nav-link')
    await navTabs.at(1).trigger('click')
    expect(wrapper.vm.activeSeason).toBe(1)
  })
})
