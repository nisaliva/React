import React from 'react';
import Button from './Button';
import Input from './Input';

export default function Form({ input, setInput, onSubmit }) {
  return (
    <form>
      <Input input={input} setInput={setInput} />
      <Button onSubmit={onSubmit} />
    </form>
  );
}