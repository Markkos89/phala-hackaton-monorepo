import { useRouter } from "next/router"; // Import useRouter
import React, { useState } from "react";

function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter(); // Initialize useRouter
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting form...");
    try {
      console.log("Sending POST request...");
      console.log("Username:", username);
      console.log("Password:", password);
      setTimeout(() => {
        setLoading(false); // Set loading back to false

        // Redirect to the REGISTER PAGE
        router.push("/register"); // Change "/REGISTER-PAGE" to your desired route
      }, 2000);
      // You can add your authentication logic here, such as sending a request to your server.
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Login</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter your username and password
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className={`group relative flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                loading ? "cursor-not-allowed bg-indigo-300" : "bg-indigo-600 hover:bg-indigo-700"
              }`} // Apply conditional classes based on the loading state
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <span>Loading</span>
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-indigo-500"></div>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
