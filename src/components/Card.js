import React from "react";
import styled from "styled-components";
import Button from "./Button";

const CardWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px #ccc;
  border: 0px;
  padding: 20px;
  max-width: 200px;
  background-color: #EFEBE9;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #e74c3c;
  text-align: center;
`;

const Image = styled.img`
  border-radius: 5px;
  padding: 20px;
  background-color: #E0E0E0;
  max-width: 100%
`;

export default class Card extends React.Component {

  render() {
    return (
      <CardWrapper>
        <Title>{this.props.title}</Title>
        <Image src={this.props.imageUrl} />
      </CardWrapper>
    )
  }
};
