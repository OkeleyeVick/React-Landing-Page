import { Link } from "react-router-dom";

const ErrorPage = () => {
	const style1 = {
		display: "grid",
		position: "relative",
		placeContent: "center",
		minHeight: "100vh",
		width: "100%",
	};
	const style2 = {
		position: "absolute",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		width: "25%",
		height: "100%",
		marginInline: "auto",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	};
	return (
		<div className="content__box" style={style1}>
			<div className="error__display" style={style2}>
				<div className="error__type">
					<h1>404</h1>
				</div>
				<div className="p">
					Looks like you got on a page that doesn't exist, kindly use
					the link to get back to the home page. Thank you
				</div>
				<div className="go__back">
					<Link to="/">Back to Home page</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
