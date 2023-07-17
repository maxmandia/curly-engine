import { render, screen } from "@testing-library/react";
import EditSignature from "../components/EditSignature";

describe("EditSignature", () => {
  it("renders correctly", () => {
    render(
      <EditSignature
        key={1}
        selectedUser={{
          id: 1,
          name: "Jimmy A. User",
          dob: "03/13/2001",
          phone: "7277588823",
          email: "jimmya@invalid.email",
          signature: null,
        }}
        setIsEditing={jest.fn()}
        setUsers={jest.fn()}
      />
    );
    expect(screen.getByText("Add a custom signature")).toBeInTheDocument();
  });
});
