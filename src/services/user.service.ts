import { apiClient } from "./api.client";

export function getUserRequest() {
  return apiClient.get("/api/");
}
