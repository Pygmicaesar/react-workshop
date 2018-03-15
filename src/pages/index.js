import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

export default class Index extends React.Component {
  render() {
    return (
      <Card
        title="My Title"
        imageUrl="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F08%2F12%2F16%2F14%2Fcat-2634641__180.png&f=1"
      />
    )
  }
};
