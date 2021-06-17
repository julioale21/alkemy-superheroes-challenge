import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Connections from "./Connections";

test("render content", () => {
  const connections = {
    "group-affiliation":
      "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
    relatives:
      "Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)",
  };

  const component = render(<Connections connections={connections} />);
  const title = component.container.querySelector("h6");
  const afiliation = component.container.querySelectorAll("p")[0];
  const relatives = component.container.querySelectorAll("p")[1];

  expect(title).toHaveTextContent("Connections");
  expect(afiliation).toHaveTextContent(`Group affiliation:${connections["group-affiliation"]}`);
  expect(relatives).toHaveTextContent(`Relatives:${connections["relatives"]}`);
});
