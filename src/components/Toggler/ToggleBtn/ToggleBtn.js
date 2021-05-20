import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const leftToRight = keyframes`
 0% {
  left: 10%;
 }

 100% {
  
  left: 50%;
 }
`;

const rightToLeft = keyframes`
 0% {
  left: 50%;
 }

 100% {
  left: 10%;
 }
`;

const TOGGLE_BTN = styled.div`
  position: relative;
  margin: 0 1rem;
  cursor: pointer;
  border: 1px solid
    linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border-radius: 20px;
  background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  height: 2.1rem;
  width: 4rem;
  display: flex;
  align-items: center;
`;

const Ball = styled.div`
  position: absolute;
  background-color: hsl(240, 78%, 98%);
  border: 1px solid hsl(240, 78%, 98%);
  border-radius: 50%;
  height: 1.6rem;
  width: 1.6rem;

  ${(props) =>
    props.clicked
      ? css`
          animation: ${leftToRight} 0.2s;
          left: 50%;
        `
      : css`
          animation: ${rightToLeft} 0.2s;
          left: 10%;
        `}
`;

const ToggleBtn = (props) => {
  const [clicked, setClicked] = useState(false);

  const toggle = props.toggle;

  useEffect(() => {
    const timeout = setTimeout(() => {
      toggle(clicked);
    }, 200);

    return () => clearTimeout(timeout);
  }, [clicked, toggle]);

  const toggleClickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <TOGGLE_BTN onClick={toggleClickHandler}>
      <Ball clicked={clicked} />
    </TOGGLE_BTN>
  );
};

export default ToggleBtn;
