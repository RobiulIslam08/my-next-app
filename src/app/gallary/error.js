"use client"

const ErrorPage = ({error, reset}) => {
	
	return (
		<div>
		<p>	something went wrong</p>
		<p>{error.message}</p>
		<button onClick={()=> reset()}>try again</button>
		</div>
	);
};

export default ErrorPage;