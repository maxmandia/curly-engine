export default async function getUsers() {
  try {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
