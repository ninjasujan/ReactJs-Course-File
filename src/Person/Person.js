import React from 'react';
import Styled from 'styled-components';
import styled from 'styled-components';

const person = (props) => {
  const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #eee;
    font-weight: bold;

    @media (min-width: 500px) {
      width: 450px;
    }
  `;

  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old.!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </StyledDiv>
  );
};

// export default person;
export default person;
