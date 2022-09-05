import { useParams, useLocation } from "react-router-dom";

const MovieDetail = () => {
	const { id } = useParams();
	const location = useLocation();
	const { title, genre, director, description } = location.state.eachMovie;

	return (
		<div>
			<h4>This is a Movie details page for {id}</h4>
			<br />
			<br />
			<div className="">
				<h4>Title: {title}</h4>
				<br />
				<h5>Genre: {genre}</h5>
				<br />
				<h5>Director: {director}</h5>
				<br />
				<p>Description: {description}</p>
			</div>
		</div>
	);
};

export default MovieDetail;
