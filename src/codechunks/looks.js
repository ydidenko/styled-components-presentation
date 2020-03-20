import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  @media screen and (max-width: 42px) {
    color: paleturquoise;
  }
`;

const Form = () => {
  const [btnText, setBtnText] = useState('PUSH ME!');

  const onClick = () => { setBtnText('HARDER!') };

  return (
    <form>
      <Button onClick={onClick}>
        {btnText}
      </Button>
    </form>
  )
}

export default Form;