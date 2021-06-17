import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("", () => {
  const mockFunction = jest.fn();

  const component = render(<LoginForm login={mockFunction} />);

  const btnLogin = component.container.querySelector("button");

  fireEvent.click(btnLogin as HTMLButtonElement);

  expect(btnLogin).toHaveBeenCalledTimes(1);
});
