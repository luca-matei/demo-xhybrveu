"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import SkipsTable from "@/components/skips/SkipsTable";
import SkipsFootbar from "@/components/skips/SkipsFootbar";
import { NAVIGATION_STEPS } from "@/components/navigation/Navigation";
import {
  API_BASE_URL,
  CHALLENGE_AREA,
  CHALLENGE_POSTCODE,
} from "@/lib/constants";

export default function SkipsPage() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isFetchingRef = useRef<boolean>(false);

  async function getSkips(postCode: string, area: string) {
    if (isFetchingRef.current) return;
    try {
      isFetchingRef.current = true;
      const response = await fetch(
        `${API_BASE_URL}/skips/by-location?postcode=${postCode}&area=${area}`,
      );
      const data = await response.json();
      setSkips(data);
      setIsLoading(false);
      isFetchingRef.current = false;
    } catch (error) {
      console.error("Error fetching skip sizes:", error);
    }
  }

  useEffect(() => {
    getSkips(CHALLENGE_POSTCODE, CHALLENGE_AREA);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {NAVIGATION_STEPS.map((step, index) => (
              <React.Fragment key={`step-${index}`}>
                {index !== 0 && (
                  <>
                    <ChevronRight
                      className={`md:hidden size-6 ${step.isComplete ? "text-brand" : step.isInProgress ? "text-white" : "text-secondary"}`}
                    />
                    <div
                      className={`hidden md:block w-16 h-px ${step.isComplete ? "bg-brand" : step.isInProgress ? "bg-white" : "bg-secondary"}`}
                    ></div>
                  </>
                )}
                <button
                  disabled={step.isComplete && step.isInProgress}
                  className={`flex items-center whitespace-nowrap transition-colors ${step.isComplete ? "text-brand cursor-pointer hover:text-brand" : step.isInProgress ? "text-white" : "text-white/60 cursor-not-allowed opacity-50"}`}
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
