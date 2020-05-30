import React from 'react';

function Button({ onClick }) {
    return (
        <div>
            <button style={{ width: '150px', margin: "30px", fontSize: '1rem', color:'blue' }}onClick={onClick}>
                Get a dog!
            </button>
        </div>
    );
}

export default Button 