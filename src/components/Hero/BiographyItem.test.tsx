import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import BiographyItem from "./BiographyItem";

test("render content", () => {
  const name: string = "full-name";
  const value: string = "Clark Kent";

  const component = render(<BiographyItem name={name} value={value} />);
  const span = component.container.querySelector("span");

  expect(span).toHaveTextContent(name + ":");
  expect(component.container).toHaveTextContent(`${name}:${value}`);
});

test("it render a correct value when receive an array", () => {
  const name: string = "aliases";
  const value: string[] = [
    "Clark Joseph Kent",
    "The Man of Steel",
    "the Man of Tomorrow",
    "the Last Son of Krypton",
    "Big Blue",
    "the Metropolis Marvel",
    "the Action Ace",
  ];

  const component = render(<BiographyItem name={name} value={value} />);
  const span = component.container.querySelector("span");

  expect(span).toHaveTextContent(name + ":");
  expect(component.container).toHaveTextContent(`${name}:${value.toString()}`);
});
