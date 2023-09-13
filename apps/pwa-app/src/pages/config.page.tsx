import React, { useEffect, useState } from "react";

import { configData } from "@/helpers/ConfigData";
import type { ConfigApiResponse } from "@/typings/typings";

function Config() {
  const [varName, setVarName] = useState<string>("");
  const [varValue, setVarValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseVarName, setResponseVarName] = useState<string | null>(null);
  const [responseVarValue, setResponseVarValue] = useState<string | null>(null);
  const [id, setId] = useState<number>(1);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Submitting form...");
    setIsLoading(true); // Set loading to true when submitting
    try {
      // Define your server endpoint URL
      const apiUrl = "http://localhost:3000/api/config"; // Replace with your actual server URL

      // Create an object with the data you want to send
      const data = {
        varName,
        varValue,
      };
      console.log("Data to send:", data);

      // Send a POST request to your server using fetch
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type
        },
        body: JSON.stringify(data), // Convert data to JSON format
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle the response as needed

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const responseData: ConfigApiResponse = await response.json();
      console.log("Response from server:", responseData);

      // Set the response data
      setResponseVarName(responseData.varName);
      setResponseVarValue(responseData.varValue);
    } catch (error) {
      console.error("Error sending POST request:", error);
    } finally {
      setIsLoading(false); // Set loading to false after request completion
    }
  };

  useEffect(() => {
    console.log("varName:", varName);
    console.log("varValue:", varValue);
    try {
      const data: ConfigApiResponse = configData(id);
      setResponseVarName(data.varName);
      setResponseVarValue(data.varValue);
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  }, [varName, varValue]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 rounded bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-semibold">Configure Variables</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="varName" className="block text-sm font-medium text-gray-700">
              Variable Name
            </label>
            <input
              type="text"
              name="varName"
              value={varName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setVarName(e.target.value);
              }}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="varValue" className="block text-sm font-medium text-gray-700">
              Variable Value
            </label>
            <input
              type="text"
              name="varValue"
              value={varValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setVarValue(e.target.value);
              }}
              className="mt-1 w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="rounded bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? "Loading..." : "Submit"} {/* Show loading text when loading */}
            </button>
          </div>
        </form>
        {responseVarName !== null && responseVarValue !== null && (
          <div className="mt-4">
            <h2 className="mb-2 text-lg font-semibold">Response:</h2>
            <p>
              Variable Name: <span className="font-semibold">{responseVarName}</span>
            </p>
            <p>
              Variable Value: <span className="font-semibold">{responseVarValue}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Config;
