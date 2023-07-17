import { screen, render } from "@testing-library/react";
import DeleteUserModal from "../components/DeleteUserModal";

describe("DeleteUserModal", () => {
  it("renders correctly", () => {
    render(<DeleteUserModal />);
    expect(
      screen.getByText("Are you sure you want to delete?")
    ).toBeInTheDocument();
  });
});
