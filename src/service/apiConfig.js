
import axios from "axios";

export function setupAPIClient(ctx) {

  const api = axios.create({
    baseURL: "http://localhost:3001/",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  });

  return api;
}