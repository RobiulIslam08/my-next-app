import React from 'react';

const DynamicProducPage = async ({params, searchParams}) => {
	const productId = await params.product
	console.log(await searchParams)
	
	return (
		<div>
			<p>Dynamic Product Page {productId}</p>
		</div>
	);
};

export default DynamicProducPage;