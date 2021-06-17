import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import AppearanceItem from "./AppearanceItem";

test("render content", () => {
  const name: string = "power";
  const value: string = "100";

  const component = render(<AppearanceItem name={name} value={value} />);

  // eslint-disable-next-line no-console
  console.log(component);
});
