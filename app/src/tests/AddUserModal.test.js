import { render, screen } from "@testing-library/react";

import AddUserModal from "../components/AddUserModal";

describe("AddUserModal", () => {
  it("renders correctly", () => {
    render(<AddUserModal />);
    expect(screen.getByText("Add User")).toBeInTheDocument();
  });
});
