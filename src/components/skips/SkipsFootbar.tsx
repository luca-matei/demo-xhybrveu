import React from "react";

export default function SkipsFootbar({ skip }: SkipsFootbarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-end">
          <div className="text-right mb-4 sm:mb-0 sm:mr-8">
            <span className="text-sm text-gray-400">{skip.size} yards</span>
            <span className="text-sm text-gray-400 ml-2">
              {skip.hire_period_days} days
            </span>
            <span className="text-2xl font-bold text-[#4ADE80] ml-2">
              £{skip.price_before_vat}
            </span>
            <span className="text-sm text-gray-400 ml-2">(excl. VAT)</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 w-full sm:w-auto bg-[#2A2A2A] hover:bg-[#3A3A3A] transition-all rounded-md">
              Back
            </button>
            <button className="px-4 py-2 w-full sm:w-auto bg-[#4ADE80]/50 hover:bg-[#4ADE80] text-white transition-all rounded-md">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
