import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from "@testing-library/react";
import renderer from "react-test-renderer";

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

it("matches snapshot", () => {
  const tree = renderer.create(<h1>Admin</h1>).toJSON;
  expect(tree).toMatchSnapshot();
});
