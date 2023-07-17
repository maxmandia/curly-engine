import { render, screen } from "@testing-library/react";
import EditUser from "../components/EditUser";

describe("EditUser", () => {
  it("renders correctly", () => {
    render(
      <EditUser
        selectedUser={{
          id: 1,
          name: "Jimmy A. User",
          dob: "03/13/2001",
          phone: "7277588823",
          email: "idk",
          signature: null,
        }}
        setIsEditingUser={jest.fn()}
        key={1}
        setUsers={jest.fn()}
      />
    );
    expect(screen.getByText("Edit User Information")).toBeInTheDocument();
  });
});
