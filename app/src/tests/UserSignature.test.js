import { screen, render } from "@testing-library/react";
import UserSignature from "../components/UserSignature";

describe("UserSignature", () => {
  it("renders correctly", () => {
    render(
      <UserSignature
        selectedUser={{
          id: 1,
          name: "John Doe",
          email: "idk",
          phone: "7277588823",
          dob: "03/13/2001",
          signature: null,
        }}
      />
    );
    expect(screen.getByText("Signature Status:")).toBeInTheDocument();
  });
});
