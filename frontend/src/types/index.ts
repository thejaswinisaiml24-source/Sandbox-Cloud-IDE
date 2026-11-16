export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  status: "current" | "upcoming" | "planned";
  items: string[];
}

export interface HealthResponse {
  status: string;
  version: string;
  environment: string;
}
