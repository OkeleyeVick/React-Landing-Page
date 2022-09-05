import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const [movies, setMovies] = useState([]);

	const movieURL = "http://localhost:4000/movies";
	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch(movieURL);
			const data = await response.json();

			// ! It is displaying the number of data based on what's in the JSON file
			setMovies(data);
		};
		fetchMovies();
	}, []);

	function handleDelete(eachMovie) {
		const newMovies = movies.filter((movie) => movie.id !== eachMovie.id);
		setMovies(newMovies);
	}

	return (
		<div className="home">
			<h3>New Movies</h3>
			<div className="movie-count">
				<div>
					<h6>Number of Movies: </h6>
					<span>{movies.length}</span>
				</div>
			</div>
			<div className="new-movies">
				{movies.map((eachMovie) => {
					return (
						<div className="eachMovie" key={eachMovie.id}>
							<div>
								<h5>Title :</h5> <span>{eachMovie.title}</span>
							</div>
							<div>
								<h6>Genre : </h6>
								<span>{eachMovie.genre}</span>
							</div>
							<div>
								<h6>Description :</h6>
								<span>{eachMovie.description}</span>
							</div>
							<div>
								<h6>Director :</h6>
								<span>{eachMovie.director}</span>
							</div>
							<div>
								<button onClick={() => handleDelete(eachMovie)}>
									Delete
								</button>
								{/* <Link
									to={`moviedetail/${eachMovie.id}`}
									state={{ eachMovie }}
								>
									Read more...
								</Link> */}
								<Link to={`moviedetail/${eachMovie.id}`}>
									Read more...
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
