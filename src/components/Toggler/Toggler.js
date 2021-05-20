import React from "react";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn/ToggleBtn";

const TOGGLER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
`;

const Titles = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: hsl(234, 14%, 74%);
`;

const Toggler = (props) => {
  return (
    <TOGGLER>
      <Titles>Annually</Titles>
      <ToggleBtn toggle={props.toggle} />
      <Titles>Monthly</Titles>
    </TOGGLER>
  );
};

export default Toggler;
