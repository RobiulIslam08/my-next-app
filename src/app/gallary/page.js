import Image from 'next/image';
import React from 'react';

const GallaryPage = () => {
	return (
		<div>
			<p>GallaryPage</p>
			<img className='h-40 w-40' src='https://i.ibb.co.com/Q7Ct5zST/photo-1609599006353-e629aaabfeae.jpg'></
			img>
			<Image width={500} height={500} alt='next image'  src="https://i.ibb.co.com/Q7Ct5zST/photo-1609599006353-e629aaabfeae.jpg"/>
		</div>
	);
};

export default GallaryPage;