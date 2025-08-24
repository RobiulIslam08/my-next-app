import Navbar from '@/component/Navbar';
import React from 'react';

const HomePage = async() => {
  const res = await fetch('http://localhost:5000/products', {
  cache:"no-store"
  })
  const product = await res.json()
  console.log(product)
  return (
    <div>
      <Navbar/>
      Home
    </div>
  );
};

export default HomePage;