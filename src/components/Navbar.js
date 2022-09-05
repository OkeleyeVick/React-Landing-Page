import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<h2>Logo</h2>
			</div>
			<div className="nav-links">
				<Link to="/">Home</Link>
				<Link to="addmovies">Add Movie</Link>
			</div>
		</nav>
	);
};

export default Navbar;
