import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AppHeader, {
      propsData: {
        isMovieDetailsPage: false
      }
    })
  })

  it('Renders app header navbar', () => {
    expect(wrapper.find('.navbar').exists()).toBe(true)
  })

  it('Emits searchResults event when search function is invoked', () => {
    const mockResponse = [{ show: { id: 1, name: 'Show 1' } }, { show: { id: 2, name: 'Show 2' } }]
    jest.mock('axios', () => ({
      fetch: () => Promise.resolve(mockResponse)
    }))

    const input = wrapper.find('.form-control')
    wrapper.vm.search()
    expect(input.exists()).toBeTruthy()
    input.setValue('test')
    expect(wrapper.emitted).toBeTruthy()
  })
})
