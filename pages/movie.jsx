import MovieList from "../components/MoviesList";
import MyMovies from "../components/MyMovies";

export default function Movie(){
    return(
        <div className="justify-center">
            <h1>My Movies</h1>
            <MovieList/>
        </div>
    )
}