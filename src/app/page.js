import React from 'react';

const HomePage = async() => {
  const res = await fetch('http://localhost:5000/products', {
    next:{
      revalidate:30
    }
  })
  const product = await res.json()
  console.log(product)
  return (
    <div>
      Home
    </div>
  );
};

export default HomePage;