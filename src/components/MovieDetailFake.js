import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBackward } from "../assets/icons/Icons";

const MovieDetailFake = () => {
	const { id } = useParams();
	const [MovieDetail, setMovieDetail] = useState({});

	const MovieURL = "http://localhost:4000/movies/"; // ? Movie URL to be fetched
	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch(MovieURL + id);
			const data = await response.json();

			setMovieDetail(data);
		};
		fetchMovies();
	}, [id]);
	const navigate = useNavigate();

	function GoBack() {
		navigate(-1);
	}

	return (
		<div className="movie-detail-fake">
			<button className="go-back" onClick={GoBack}>
				<>
					<div className="icon">{<ArrowBackward />}</div>
					<div className="small">Go back</div>
				</>
			</button>
			<br />
			<br />
			<h3>Each Movie Detail</h3>
			<br />
			<br />
			<small>
				<div className="each-data">
					<div>
						<h5>Title: </h5>
						<span className="value">{MovieDetail.title}</span>
					</div>
					<br />
					<div>
						<h6>Genre: </h6>
						<span className="value">{MovieDetail.genre}</span>
					</div>
					<br />
					<div>
						<h6>Director: </h6>
						<span className="value">{MovieDetail.director}</span>
					</div>
					<br />
					<h6>Description: </h6> <p>{MovieDetail.description}</p>
				</div>
			</small>
		</div>
	);
};

export default MovieDetailFake;
