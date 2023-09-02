import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

async function fetchDataFromApi(endpoint, params) {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      headers: headers,
      params: params, // Pass the params object to the axios config
    });
    return response.data;

    // Use the response data here
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Call the function with the specific endpoint and params to initiate the request
const specificEndpoint = "your-endpoint"; // Replace 'your-endpoint' with the desired endpoint
const queryParams = {
  // Replace these with the specific query parameters you want to use
  page: 1,
  language: "en-US",
  // Add more parameters as needed
};
export default fetchDataFromApi;
