import './App.css'
import resultMovies from './mocks/with-results.json'
// import withOutMovies from './mocks/no-resultsl.json'
import { ListaPeliculas, SinPeliculas } from './components/Movies'

//api http://www.omdbapi.com/?apikey=cc72ca0b&
//api_key cc72ca0b
function App() {

  const movies = resultMovies.Search
  const hasMovies = movies.length > 0



  return (
    <>
      <header>
        <h1>BUSCADOR DE PELICULAS</h1>
        <label>Ingresa el nombre de la pelicula</label>
        <input type="text" placeholder='Avengers, Ant man, ...' />
      </header>

      <main>
        Aqui van las peliculas
        {
          hasMovies ?
            <ListaPeliculas movies={movies} />
            : <SinPeliculas />
        }
      </main>
    </>
  )
}

export default App
