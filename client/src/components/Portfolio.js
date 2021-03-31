import React, { Component } from "react";
import Card from "./Card";
import Wrapper from "./Wrapper";
import projects from "./projects.json";

class Portfolio extends Component {
  state = { projects };

  render() {
    return (
      <Wrapper>
        {this.state.projects.map((project) => (
          <Card
            id={projects.id}
            image={projects.image}
            title={projects.title}
            description={projects.description}
            link={projects.link}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Portfolio;
