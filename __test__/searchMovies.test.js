import searchMovies from '../src/searchMovies';

describe('testing searchMovies function', () => {
  // Test against stored output
  test('by title', () =>
    expect(searchMovies.byTitle('prometheus')).toMatchSnapshot())

  test('is case insensitive', () =>
    expect(searchMovies.byTitle('prometheus').length).toBe(1))

  test('sequencial search', () =>
    ['a', 'alien', 'alien 3'].forEach((query) =>
      expect(searchMovies.byTitle(query)).toMatchSnapshot()
    )
  )
})
