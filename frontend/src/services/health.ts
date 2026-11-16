import apiClient from "@/services/api";
import type { HealthResponse } from "@/types";

export async function getHealth(): Promise<HealthResponse> {
  const { data } = await apiClient.get<HealthResponse>("/health");
  return data;
}
