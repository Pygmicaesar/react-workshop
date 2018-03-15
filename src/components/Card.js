import React from "react";
import styled from "styled-components";
import Button from "./Button";

const CardWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 3px 3px 3px 3px #ccc;
  border: 1px solid black;
  padding: 40px;
  max-width: 300px;
  background-color: #EFEBE9;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  color: #e74c3c;
`;

const Image = styled.img`
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
