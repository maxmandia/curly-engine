import { render, screen } from "@testing-library/react";
import UserInfo from "../components/UserInfo";

describe("UserInfo", () => {
  it("renders correctly", () => {
    render(
      <UserInfo
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
    expect(screen.getByText("Email:")).toBeInTheDocument();
  });
});
