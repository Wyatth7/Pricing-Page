import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Bars from "./components/Bars/Bars";
import { BottomSvg, TopSvg } from "./components/svgs/svgs";
import Toggler from "./components/Toggler/Toggler";

// PAGE DATA
import annualData from "./utils/pageData/annualData";
import monthData from "./utils/pageData/mothData";

const GlobalStyles = createGlobalStyle`
  *::before,
  *,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
    font-weight: 700;
    user-select: none;
  }
`;

const APP = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsl(240, 78%, 98%);
`;

const MainContent = styled.div`
  z-index: 2000;
`;

const MainHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: hsl(233, 13%, 49%);
`;

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(annualData);
  }, []);

  // Data is annual by default (bool=false), so, when the button is clicked,
  // month data will be shown (bool=true).
  const dataHandler = (bool) => {
    bool ? setData(monthData) : setData(annualData);
  };

  return (
    <APP>
      <GlobalStyles />
      <TopSvg />
      <BottomSvg />
      <MainContent>
        <MainHeader>Our Pricing</MainHeader>
        <Toggler toggle={dataHandler} />
        {data ? <Bars data={data} /> : null}
      </MainContent>
    </APP>
  );
}

export default App;
