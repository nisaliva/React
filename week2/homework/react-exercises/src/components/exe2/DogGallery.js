import React, { useState } from 'react';
import DogPhoto from './DogPhoto';
import Button from './Button';

function DogGallery() {
    const [dogPhotos, setDogphotos] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const getDogPhoto = async () => {
      try {
          setLoading(true);
          const apiUrl = 'https://dog.ceo/api/breeds/image/random';
          const res = await fetch(apiUrl);
          
          if (res.ok) {
              const data = await res.json();
              setDogphotos([...dogPhotos, data.message]);
          } else {
              throw Error('Oeps! Something went wrong.');
          }
      }catch (e) {
          setError(true);
      }finally {
          setLoading(false);
      }
    };
   
    return (
        <div>
            <h1>Dog Photo Gallery</h1>

            <Button onClick={getDogPhoto}/>

            {dogPhotos.length === 0 ? (
                <h3>Get your first dog by clicking the button!</h3>
            ) : (
                dogPhotos.map((dogPhoto, index) => (
                    <DogPhoto key={index} imgURL={dogPhoto} />
                ))
            )}

            {isLoading && <p>Loading</p>}
            {error && <p>Oh no! There is an error </p>}
        </div>
    );
}

export default DogGallery;