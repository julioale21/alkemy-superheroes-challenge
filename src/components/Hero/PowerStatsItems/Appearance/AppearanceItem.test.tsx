import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import AppearanceItem from "../AppearanceItem";

test("render content", () => {
  const name: string = "gender";
  const value: string = "male";

  const component = render(<AppearanceItem name={name} value={value} />);
  const span = component.container.querySelector("span");

  expect(span).toHaveTextContent(name + ":");
  expect(component.container).toHaveTextContent(`${name}:${value}`);
});

test("it render a correct value when receive an array", () => {
  const name: string = "height";
  const value: string[] = ["6'3", "191 cm"];

  const component = render(<AppearanceItem name={name} value={value} />);
  const span = component.container.querySelector("span");

  expect(span).toHaveTextContent(name + ":");
  expect(component.container).toHaveTextContent(`${name}:${value[1]}`);
});
