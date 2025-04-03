import {
  Calendar,
  CreditCard,
  MapPin,
  Shield,
  Trash2,
  Truck,
} from "lucide-react";
import { NavigationStep } from "@/components/navigation/types";

export const NAVIGATION_STEPS: NavigationStep[] = [
  {
    icon: MapPin,
    title: "Postcode",
    isComplete: true,
    isInProgress: false,
  },
  {
    icon: Trash2,
    title: "Waste Type",
    isComplete: true,
    isInProgress: false,
  },
  {
    icon: Truck,
    title: "Select Skip",
    isComplete: false,
    isInProgress: true,
  },
  {
    icon: Shield,
    title: "Permit Check",
    isComplete: false,
    isInProgress: false,
  },
  {
    icon: Calendar,
    title: "Choose Date",
    isComplete: false,
    isInProgress: false,
  },
  {
    icon: CreditCard,
    title: "Payment",
    isComplete: false,
    isInProgress: false,
  },
];
