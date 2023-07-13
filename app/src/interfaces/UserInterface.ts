import SignatureInterface from "./SignatureInterface";

export default interface UserInterface {
  id: number;
  name: string;
  dob: string;
  phone: string;
  email: string;
  signature: SignatureInterface | null;
}
