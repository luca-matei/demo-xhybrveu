import { LucideIcon } from "lucide-react";

export interface NavigationStep {
  icon: LucideIcon;
  title: string;
  isComplete: boolean;
  isInProgress: boolean;
}
