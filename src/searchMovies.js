const movies = [{
  title: 'Alien',
  year: '1979',
  rating: '★★★★★'
} , {
  title: 'Aliens',
  year: '1986',
  rating: '★★★★★'
} , {
  title: 'Alien 3',
  year: '1992',
  rating: '★★'
} , {
  title: 'Alien 4',
  year: '1979',
  rating: '★★'
} , {
  title: 'Prometheus',
  year: '2012',
  rating: '★'
} , {
  title: 'Alien: Covenant',
  year: '2017',
  rating: '★'
}]

const searchByTitle = query =>
  movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()));

export default {
  byTitle: searchByTitle
}
