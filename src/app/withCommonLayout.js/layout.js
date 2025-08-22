import React from 'react';

const CommonLayout = ({children}) => {
	return (
		<div>
			<p> navbar</p>
			{children}
		</div>
	);
};

export default CommonLayout;