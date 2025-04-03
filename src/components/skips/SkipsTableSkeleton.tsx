import React from "react";

export default function SkipsTableSkeleton() {
  return (
    <tbody>
      {[...Array(3)].map((_, index) => (
        <tr
          key={index}
          className="cursor-pointer bg-primary outline outline-2 rounded-md outline-primary"
        >
          <td className="whitespace-nowrap rounded-l-md py-4 pl-4 pr-3 text-center sm:pl-0">
            <div className="size-4 rounded-full bg-secondary animate-pulse mx-auto" />
          </td>
          <td className="whitespace-nowrap px-3 py-4">
            <div className="h-6 w-20 bg-secondary rounded animate-pulse" />
          </td>
          <td className="whitespace-nowrap px-3 py-4">
            <div className="h-6 w-14 bg-secondary rounded animate-pulse" />
          </td>
          <td className="whitespace-nowrap px-3 py-4">
            <div className="h-6 w-14 bg-secondary rounded animate-pulse" />
          </td>
          <td className="whitespace-nowrap px-3 py-4 w-32">
            <div className="h-6 w-6 bg-secondary rounded animate-pulse mx-auto" />
          </td>
          <td className="whitespace-nowrap px-3 py-4 rounded-r-md w-32">
            <div className="h-6 w-6 bg-secondary rounded animate-pulse mx-auto" />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
