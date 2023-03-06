import { mount } from '@vue/test-utils'
import GenreList from '@/components/GenreList.vue'

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: 1,
          name: 'Show 1',
          rating: { average: 7.5 },
          image: { medium: 'image1.jpg' },
          genres: ['Action', 'Drama']
        },
        {
          id: 2,
          name: 'Show 2',
          rating: { average: 8.2 },
          image: { medium: 'image2.jpg' },
          genres: ['Comedy', 'Drama']
        }
      ]
    })
  )
}))

describe('GenreList.vue', () => {
  it('Renders the searched movie cards if the searchedShows contains data', async () => {
    const wrapper = mount(GenreList, {
      props: {
        searchedShows: [
          {
            id: 1,
            name: 'Show 1',
            rating: { average: 7.5 },
            image: { medium: 'image1.jpg' },
            genres: ['Action', 'Drama']
          }
        ]
      }
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.searchedShows.length).toBe(1)
  })

  it('Renders the all movie cards if the searchedShows is empty', async () => {
    const wrapper = mount(GenreList, {
      props: {
        searchedShows: []
      }
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.shows.length).toBe(2)
  })
})
