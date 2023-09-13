import type { ConfigApiResponse } from "@/typings/typings";

export default async function configData(_id: number): ConfigApiResponse[] {
  try {
    const data = fetch(`http://localhost:3000/api/config/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Set the content type
      },
    });
    const response = await data;
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData: ConfigApiResponse = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error sending POST request:", error);
  }
  return {};
}
