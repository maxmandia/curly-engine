import { screen, render } from "@testing-library/react";
import UserForm from "../components/UserForm";

describe("UserForm", () => {
  it("renders correctly", () => {
    render(<UserForm />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });
});
