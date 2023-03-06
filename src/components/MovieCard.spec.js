import { shallowMount } from '@vue/test-utils'
import MovieCard from '@/components/MovieCard.vue'

describe('MovieCard', () => {
  let wrapper
  let mockRouter
  const movie = {
    id: 1,
    name: 'Movie 1',
    rating: {
      average: 8.5
    },
    image: {
      medium: 'image1',
      original: 'image1'
    },
    summary: 'movie summary'
  }
  beforeEach(() => {
    const mockRoute = {
      params: {
        id: 1
      }
    }
    mockRouter = {
      push: jest.fn()
    }
    wrapper = shallowMount(MovieCard, {
      propsData: {
        movie: movie,
        title: 'Movie 1',
        imageSrc: movie.image.original,
        summary: movie.summary,
        rating: movie.rating.average
      },
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
        }
      }
    })
  })

  it('Renders Movie card component on the dom', () => {
    expect(wrapper.find('.movie-card').exists()).toBe(true)
    expect(wrapper.find('img').attributes().src).toBe(movie.image.medium)
    expect(wrapper.find('.movie-details p:nth-child(1)').text()).toBe(
      `Rating: ${movie.rating.average}`
    )
    expect(wrapper.find('.movie-details p:nth-child(2)').text()).toBe(movie.summary)
  })

  it('Routes to showMovieDetails when movie card is clicked', () => {
    wrapper.find('.movie-card').trigger('click')
    expect(mockRouter.push).toHaveBeenCalled()
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'MovieDetails', params: { id: 1 } })
  })
})
