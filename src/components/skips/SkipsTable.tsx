import { Check, X } from "lucide-react";
import React from "react";
import SkipsTableSkeleton from "@/components/skips/SkipsTableSkeleton";

function IconCheckOrX({ condition }: { condition: boolean }) {
  return condition ? (
    <Check className="size-4 text-brand" />
  ) : (
    <X className="size-4 text-red-400" />
  );
}

export default function SkipsTable({
  skips,
  selectedSkip,
  setSelectedSkip,
  isLoading,
}: SkipsTableProps) {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full p-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-secondary border-separate border-spacing-y-3">
            {isLoading ? (
              <SkipsTableSkeleton />
            ) : (
              <>
                <thead>
                  <tr>
                    <th scope="col" />
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left align-bottom"
                    >
                      Size
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left align-bottom"
                    >
                      Period
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left align-bottom"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left align-bottom"
                    >
                      Public Road
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left align-bottom"
                    >
                      Heavy Waste
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {skips.map((skip) => (
                    <tr
                      key={skip.id}
                      onClick={() => setSelectedSkip(skip)}
                      className={`cursor-pointer bg-primary outline outline-2 rounded-md transition-all ${selectedSkip?.id === skip.id ? "outline-brand" : "outline-primary hover:outline-secondary"}`}
                    >
                      <td className="whitespace-nowrap rounded-l-md px-3 py-4 font-medium text-center">
                        <input
                          type="radio"
                          checked={selectedSkip?.id === skip.id}
                          className="align-middle relative size-4 appearance-none rounded-full border border-gray-400 bg-primary before:absolute before:inset-1 before:rounded-full before:bg-primary checked:border-brand checked:bg-brand disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
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
                        <IconCheckOrX condition={skip.allowed_on_road} />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 rounded-r-md text-gray-400 w-32">
                        <IconCheckOrX condition={skip.allows_heavy_waste} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
