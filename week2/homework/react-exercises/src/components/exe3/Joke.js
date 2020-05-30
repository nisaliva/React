import React from "react";

function Joke({ setup, punchline }) {
  return (
    <div style={{background: 'LightGray', color:' blue',fontSize: '1rem', marginTop: '70px' }}>
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  );
}

export default Joke 

