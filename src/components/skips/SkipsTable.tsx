import { Check, X } from "lucide-react";
import React from "react";

export default function SkipsTable({
  skips,
  selectedSkip,
  setSelectedSkip,
}: SkipsTableProps) {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full p-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-[#2A2A2A] border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col" className="px-3 py-3.5 text-left align-bottom">
                  Size
                </th>
                <th scope="col" className="px-3 py-3.5 text-left align-bottom">
                  Period
                </th>
                <th scope="col" className="px-3 py-3.5 text-left align-bottom">
                  Price
                </th>
                <th scope="col" className="px-3 py-3.5 text-left align-bottom">
                  Public Road
                </th>
                <th scope="col" className="px-3 py-3.5 text-left align-bottom">
                  Heavy Waste
                </th>
              </tr>
            </thead>
            <tbody>
              {skips.map((skip) => (
                <tr
                  key={skip.id}
                  onClick={() => setSelectedSkip(skip)}
                  className={`cursor-pointer bg-[#1C1C1C] outline outline-2 rounded-md transition-all ${selectedSkip?.id === skip.id ? "outline-[#4ADE80]" : "outline-[#1C1C1C] hover:outline-[#2A2A2A]"}`}
                >
                  <td className="whitespace-nowrap rounded-l-md py-4 pl-4 pr-3 font-medium text-center sm:pl-0">
                    <input
                      type="radio"
                      checked={selectedSkip?.id === skip.id}
                      className="align-middle relative size-4 appearance-none rounded-full border border-gray-400 bg-[#1C1C1C] before:absolute before:inset-1 before:rounded-full before:bg-[#1C1C1C] checked:border-[#4ADE80] checked:bg-[#4ADE80] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                      readOnly
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-400">
                    {skip.size} yards
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-400">
                    {skip.hire_period_days} days
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-400">
                    £{skip.price_before_vat}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-400 w-32">
                    {skip.allowed_on_road ? (
                      <Check className="size-4 text-green-400" />
                    ) : (
                      <X className="size-4 text-red-400" />
                    )}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 rounded-r-md text-gray-400 w-32">
                    {skip.allows_heavy_waste ? (
                      <Check className="size-4 text-green-400" />
                    ) : (
                      <X className="size-4 text-red-400" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
