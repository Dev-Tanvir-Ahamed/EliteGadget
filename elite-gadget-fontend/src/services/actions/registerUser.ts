export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) {
    throw new Error("API URL is not defined. Check your .env.local file.");
  }
  try {
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    return await response.json(); // Success response
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
};
