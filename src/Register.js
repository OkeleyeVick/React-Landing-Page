import React from 'react';
import RegisterForm from "./RegisterForm";

const Image = React.lazy(() => import('./ImageRegisterForm'))

const Register = () => {
	return (
		<div className="parent__form__div">
			<div className="parent__form__inner">
				<div className="form__div">
					<RegisterForm />
				</div>
				<React.Suspense fallback={<div>Loading....</div>}>
					<div className="image__div">
						<Image />
					</div>
				</React.Suspense>
			</div>
		</div>
	);
};

export default Register;
