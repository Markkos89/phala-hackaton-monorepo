import { useRouter } from "next/router"; // Import useRouter
import React, { useState } from "react";

function Register() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter(); // Initialize useRouter
  const [formData, setFormData] = useState({
    walletAddress: "",
    email: "",
    deformFormUrl: "",
    poapEventId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting form...");
    try {
      console.log("Sending POST request...");
      console.log(formData);
      setTimeout(() => {
        setLoading(false); // Set loading back to false

        // Redirect to the REGISTER PAGE
        router.push("/config"); // Change "/REGISTER-PAGE" to your desired route
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
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Register Your Startup
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">Give your startup a new approach</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700">
              Wallet Address
            </label>
            <input
              id="walletAddress"
              name="walletAddress"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="Wallet Address"
              value={formData.walletAddress}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="deformFormUrl" className="block text-sm font-medium text-gray-700">
              Deform Form URL
            </label>
            <input
              id="deformFormUrl"
              name="deformFormUrl"
              type="url"
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="Deform Form URL"
              value={formData.deformFormUrl}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="poapEventId" className="block text-sm font-medium text-gray-700">
              POAP Event ID
            </label>
            <input
              id="poapEventId"
              name="poapEventId"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
              placeholder="POAP Event ID"
              value={formData.poapEventId}
              onChange={handleChange}
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
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
