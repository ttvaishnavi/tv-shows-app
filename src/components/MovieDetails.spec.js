import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import MovieDetails from '@/components/MovieDetails.vue'

const movieDetails = {
  data: [
    {
      id: 1,
      name: 'Test Movie',
      summary: 'Test movie summary'
    }
  ]
}

jest.spyOn(axios, 'get').mockResolvedValue(movieDetails)

describe('MovieDetails.vue', () => {
  let wrapper

  beforeEach(() => {
    axios.get.mockReset()
    wrapper = shallowMount(MovieDetails, {
      propsData: {
        id: 1
      },
      stubs: ['SeasonsTab']
    })
  })

  it('should call the axios apis to fetch movies and episodes', () => {
    expect(axios.get).toHaveBeenCalledTimes(2)
    expect(axios.get).toHaveBeenCalledWith('https://api.tvmaze.com/shows/1')
    expect(axios.get).toHaveBeenCalledWith('https://api.tvmaze.com/shows/1/episodes')
  })

  test('should render the movie details on the page', () => {
    expect(wrapper.find('.movie-details').exists()).toBe(true)
    expect(wrapper.find('.movie-image').exists()).toBe(true)
    expect(wrapper.find('.movie-info').exists()).toBe(true)
  })
  test('should render the season tabs', () => {
    const episodeDetails = {
      data: [
        {
          id: 1,
          name: 'Test Episode',
          summary: 'Test episode summary'
        },
        {
          id: 2,
          name: 'Test Episode2',
          summary: 'Test episode2 summary'
        }
      ]
    }

    jest.spyOn(axios, 'get').mockResolvedValue(episodeDetails)
    jest.spyOn(axios, 'get').mockResolvedValue(episodeDetails)
    wrapper = shallowMount(MovieDetails, {
      propsData: {
        id: 1
      },
      stubs: ['SeasonsTab']
    })
    expect(wrapper.findComponent({ name: 'SeasonsTab' }).exists()).toBe(true)
  })
})
