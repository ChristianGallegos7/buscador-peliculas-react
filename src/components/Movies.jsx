// eslint-disable-next-line react/prop-types
export const ListaPeliculas = ({ movies }) => {
    return (
        <ul>
            {
                // eslint-disable-next-line react/prop-types
                movies.map(movie => (
                    <li key={movie.imdbID}>
                        <h1>{movie.Title}</h1>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title} />
                    </li>
                ))
            }
        </ul>
    )
}

export const SinPeliculas = () => {
    return (

        <p>No hay peliculas</p>
    )
}