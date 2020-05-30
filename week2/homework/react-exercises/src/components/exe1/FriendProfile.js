import React from 'react';

const FriendProfile = ({friend: {name,location: {street: { number, name: streetName },city,state,country},email,phone}}) => {
    return (
        <div>
            <ul style={{ listStyleType: "none" }}>
                <li>Full Name : {name.first} {name.last}</li>
                <li>Address : {number} {streetName}, {city}, {state}, {country}</li>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
            </ul>
        </div>
    );
}

  export default FriendProfile