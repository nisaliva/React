import React from 'react';

function DogPhoto({ imgURL }) {
  return <img src={imgURL} alt='dog' height="300" width="300"></img>;
}

export default DogPhoto