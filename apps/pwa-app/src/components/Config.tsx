import React, { useState } from "react";

import type { ConfigApiResponse } from "@/typings/typings";

function Config() {
  const [varName, setVarName] = useState<string>("");
  const [varValue, setVarValue] = useState<string>("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Submitting form...");
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

      const responseData: ConfigApiResponse = await response.json();
      console.log("Response from server:", responseData);
    } catch (error) {
      console.error("Error sending POST request:", error);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="varName">Variable Name</label>
        <input
          type="text"
          name="varName"
          value={varName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setVarName(e.target.value);
          }}
        />
        <label htmlFor="varValue">Variable Value</label>
        <input
          type="text"
          name="varValue"
          value={varValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setVarValue(e.target.value);
          }}
        />
      </form>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Config;
