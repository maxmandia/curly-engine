import { screen, render } from "@testing-library/react";

import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders correctly", () => {
    render(<Navbar />);
    expect(screen.getByText("Add New User")).toBeInTheDocument();
  });
});
