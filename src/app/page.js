import React from 'react';

const HomePage = async() => {
  const res = await fetch('http://localhost:5000/products', {
    cache:"force-cache"
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