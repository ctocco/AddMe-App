import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from "@testing-library/react";

import NavBar from "../index";
//import "jest-dom/extend-expect";

afterEach(cleanup); // cleans up

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBar />, div);
});
test("renders", () => {
  const { asFragment } = render(<NavBar text="Hello!" />);
  expect(asFragment()).toMatchSnapshot();
});

it("inserts text in H1", () => {
  const { getByTestId, getByText } = render(<NavBar text="Admin" />);
  expect(getByTestId("h1")).toHaveTextContent("Admin");
});
