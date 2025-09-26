import React, { useState } from "react";

export default function DataTable({
  subtitle,
  title,
  description,
  columns,
  data,
  bgColor = "#ffffff",
}) {
  const [search, setSearch] = useState("");

  // Filter rows based on search term
  const filteredData = data.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <section className="py-12" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        {subtitle && (
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
            {subtitle}
          </p>
        )}
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-gray-600 text-sm md:text-base max-w-2xl">
            {description}
          </p>
        )}

        {/* Table container */}
        <div className="mt-6 bg-white shadow-sm rounded-lg overflow-hidden">
          {/* Search */}
          <div className="p-4 border-b flex items-center justify-between">
            <input
              type="text"
              placeholder="Search table..."
              className="w-full md:w-1/3 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring focus:ring-teal-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => window.print()}
              className="ml-3 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              🖨 Print
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  {columns.map((col, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 font-semibold border-b text-sm"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      {Object.values(row).map((val, colIndex) => (
                        <td
                          key={colIndex}
                          className="px-4 py-3 border-b text-gray-700"
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-4 py-6 text-center text-gray-500"
                    >
                      No results found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
