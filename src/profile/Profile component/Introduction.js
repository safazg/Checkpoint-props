import React from "react";
const Introduction = (props) => {
    return (
      <section id="about-me">
        <h1>
          Hello my name is <span class="rotate text-important">{props.name}</span>{" "}
          ,<br />
          and i'm a web developer
        </h1>
        <img class="avatar rotate" src={props.imgSrc} alt={props.name} />
      </section>
    );
  };
  
  export default Introduction;