import React from 'react';

function Button({ onClick }) {
    return (
        <div>
            <button style={{ width: '150px', margin: "30px", fontSize: '1rem', color:'blue' }}onClick={onClick}>
                Get a friend!
            </button>
        </div>
    );
}

export default Button 