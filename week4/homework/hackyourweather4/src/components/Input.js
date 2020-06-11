import React from 'react';

function Input({ input, setInput }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <input className="search"
      type="search"
      placeholder="Search City..."
      onChange={handleChange}
      value={input}
    />
  );
}

export default Input