import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewMovie = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [genre, setGenre] = useState("");
	const [director, setDirector] = useState("");
	const [description, setDescription] = useState("");

	const handleMovieData = (e) => {
		e.preventDefault();
		const movieData = { title, genre, director, description };
		const url = "http://localhost:4000/movies";

		const addMovies = async () => {
			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify(movieData),
				headers: {
					Accept: "application/json",
					"Content-type": "application/json",
				},
			});
			return response;
		};
		addMovies();
		setDescription("");
		setTitle("");
		setDirector("");
		setGenre("");

		navigate("/");
	};

	return (
		<div>
			<br />
			<h3>Add New Blogs</h3>
			<form onSubmit={handleMovieData}>
				<div>
					<label htmlFor="title">Movie Title</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Enter movie title"
					/>
				</div>
				<div>
					<label htmlFor="genre">Genre</label>
					<input
						type="text"
						id="genre"
						value={genre}
						onChange={(e) => setGenre(e.target.value)}
						placeholder="Enter movie genre"
					/>
				</div>
				<div>
					<label htmlFor="director">Movie Director</label>
					<input
						type="text"
						id="director"
						value={director}
						onChange={(e) => setDirector(e.target.value)}
						placeholder="Enter movie director"
					/>
				</div>
				<div>
					<label htmlFor="description">Movie Description</label>
					<textarea
						type="text"
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="Enter movie description"
					></textarea>
				</div>
				<div className="add">
					<button>Add new movie</button>
				</div>
			</form>
		</div>
	);
};

export default NewMovie;
