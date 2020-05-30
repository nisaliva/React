import React, { useState } from 'react';
import FriendProfile from './FriendProfile';
import Button from './Button';

function Friend() {
    const [friend, setFriend] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    const getFriend = async () => {
      try {
          setLoading(true);
          const apiUrl = 'https://www.randomuser.me/api?results=1';
          const res = await fetch(apiUrl);
          
          if (res.ok) {
              const data = await res.json();
              setFriend(data.results[0]);
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
        <h1>New friend on demand</h1>
        <Button onClick={getFriend}/>
        {isLoading && <p>Loading</p>}
        {Object.keys(friend).length !== 0 && <FriendProfile friend={friend} />}
        {error && <p>Oh no! There is an error </p>}
      </div>
    );
  }
  
  export default Friend;