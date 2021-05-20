import React from "react";
import styled, { css } from "styled-components";

const BARS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 770px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

const SubBar = styled.div`
  height: fit-content;
  width: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2.5rem;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0 0 10px #f0f0f0;

  @media (max-width: 1190px) {
    width: 18rem;
  }

  @media (max-width: 930px) {
    width: 15rem;
  }

  @media (max-width: 770px) {
    width: 22rem;
    border-radius: 10px;
  }

  @media (max-width: 390px) {
    width: 18rem;
  }

  @media (max-width: 310px) {
    width: 15rem;
  }

  ${(props) =>
    props.left
      ? css`
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        `
      : css`
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        `}
`;

const PrimaryBar = styled(SubBar)`
  z-index: 1000;
  padding: 3.5rem 2.5rem;
  background: linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border: none;
  border-radius: 10px;
  height: 100%;

  @media (max-width: 770px) {
    margin: 1.5rem 0;
  }
`;

const Title = styled.p`
  color: ${(props) => (props.primary ? "#ffffff" : "hsl(232, 13%, 33%)")};
  font-size: 1rem;
  font-weight: 700;
`;

const Price = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => (props.primary ? "#ffffff" : "hsl(232, 13%, 33%)")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  @media (max-width: 1190px) {
    font-size: 3rem;
  }

  @media (max-width: 770px) {
    font-size: 4rem;
  }

  @media (max-width: 310px) {
    font-size: 3rem;
  }

  span {
    font-size: 2.5rem;
    margin-right: 0.5rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const InfoItem = styled.p`
  text-align: center;
  padding: 1rem 0;
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => (props.primary ? "#ffffff" : "hsl(233, 13%, 49%)")};
  border-top: 1px solid hsl(234, 14%, 74%);

  ${(props) =>
    props.bottom &&
    css`
      border-bottom: 1px solid hsl(234, 14%, 74%);
    `}
`;

const LearnMoreBtn = styled.button`
  cursor: pointer;
  background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
  border: none;
  color: ${(props) => (props.primary ? "hsl(233, 13%, 49%)" : "#ffffff")};
  border-radius: 5px;
  width: 100%;
  margin-top: 2rem;
  padding: 0.8rem 0;
  transition: all 0.2s;

  ${(props) =>
    props.primary &&
    css`
      color: hsl(237, 63%, 64%);
      background: #ffffff;

      &:hover {
        box-shadow: 0px 0px 8px hsl(234, 14%, 74%);
      }
    `}

  &:hover {
    box-shadow: 0px 0px 8px hsl(233, 13%, 49%);
  }

  p {
    text-transform: uppercase;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1.3px;
  }
`;

const Bars = (props) => {
  return (
    <BARS>
      <SubBar left>
        <Title>{props.data.basic.name}</Title>
        <Price>
          <span>$</span>
          {props.data.basic.price}
        </Price>
        <Info>
          <InfoItem>{props.data.basic.storage} Storage</InfoItem>
          <InfoItem>{props.data.basic.users} Users Allowed</InfoItem>
          <InfoItem bottom>Send up to {props.data.basic.send} GB</InfoItem>
          <LearnMoreBtn>
            <p>learn more</p>
          </LearnMoreBtn>
        </Info>
      </SubBar>
      <PrimaryBar>
        <Title primary>{props.data.pro.name}</Title>
        <Price primary>
          <span>$</span>
          {props.data.pro.price}
        </Price>
        <Info primary>
          <InfoItem primary>{props.data.pro.storage} TB Storage</InfoItem>
          <InfoItem primary>{props.data.pro.users} Users Allowed</InfoItem>
          <InfoItem bottom primary>
            Send up to {props.data.pro.send} GB
          </InfoItem>
          <LearnMoreBtn primary>
            <p>learn more</p>
          </LearnMoreBtn>
        </Info>
      </PrimaryBar>
      <SubBar right>
        <Title>{props.data.master.name}</Title>
        <Price>
          <span>$</span>
          {props.data.master.price}
        </Price>
        <Info>
          <InfoItem>{props.data.master.storage} Storage</InfoItem>
          <InfoItem>{props.data.master.users} Users Allowed</InfoItem>
          <InfoItem bottom>Send up to {props.data.master.send} GB</InfoItem>
          <LearnMoreBtn>
            <p>learn more</p>
          </LearnMoreBtn>
        </Info>
      </SubBar>
    </BARS>
  );
};

export default Bars;
