"use client";
import React, { useEffect, useState } from "react";
import {
  Calendar,
  ChevronRight,
  CreditCard,
  MapPin,
  Shield,
  Trash2,
  Truck,
} from "lucide-react";
import SkipsTable from "@/components/skips/SkipsTable";
import SkipsFootbar from "@/components/skips/SkipsFootbar";

const STEPS = [
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

export default function SkipsPage() {
  const postCode = "LE10";
  const area = "Hinckley";
  const apiUrl = `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postCode}&area=${area}`;
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getSkips() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setSkips(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching skip sizes:", error);
    }
  }

  useEffect(() => {
    getSkips();
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {STEPS.map((step, index) => (
              <React.Fragment key={`step-${index}`}>
                {index !== 0 && (
                  <>
                    <ChevronRight
                      className={`sm:hidden size-6 ${step.isComplete ? "text-[#4ADE80]" : step.isInProgress ? "text-white" : "text-[#2A2A2A]"}`}
                    />
                    <div
                      className={`hidden sm:block w-16 h-px ${step.isComplete ? "bg-[#4ADE80]" : step.isInProgress ? "bg-white" : "bg-[#2A2A2A]"}`}
                    ></div>
                  </>
                )}
                <button
                  disabled={step.isComplete && step.isInProgress}
                  className={`flex items-center whitespace-nowrap transition-colors ${step.isComplete ? "text-[#4ADE80] cursor-pointer hover:text-[#4ADE80]" : step.isInProgress ? "text-white" : "text-white/60 cursor-not-allowed opacity-50"}`}
                >
                  <step.icon className="size-6"></step.icon>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-32">
          <h2 className="text-2xl font-bold text-center mb-4">
            Choose Your Skip Size
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Select the skip size that best suits your needs
          </p>
          <SkipsTable
            skips={skips}
            selectedSkip={selectedSkip}
            setSelectedSkip={setSelectedSkip}
            isLoading={isLoading}
          />
        </div>
        {selectedSkip && <SkipsFootbar skip={selectedSkip} />}
      </main>
    </div>
  );
}
