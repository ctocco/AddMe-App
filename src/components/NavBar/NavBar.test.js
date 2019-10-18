import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from "@testing-library/react";
import NavBar from "./index";

afterEach(cleanup);

test("renders", () => {
  const { asFragment } = render(<NavBar text="Hello!" />);
  expect(asFragment()).toMatchSnapshot();
});

it("inserts text in H1", () => {
  const { getByTestId, getByText } = render(<NavBar text="Hello!" />);
});
