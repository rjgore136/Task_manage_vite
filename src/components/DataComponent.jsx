import React from "react";

const DataComponent = ({ data }) => {
  if (!data || data.length === 0) return "";

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-[10%] py-4">
      <div className="rounded-2xl shadow-md overflow-x-auto bg-white">
        <table className="min-w-full border-separate border-spacing-0">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-3 font-medium"></th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">Name</th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Gender
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">
                Language
              </th>
              <th className="px-4 py-3 font-medium whitespace-nowrap">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, idx) => (
              <tr
                key={idx}
                className="border-t border-b border-[#e0d4f7] last:border-none"
              >
                <td className="px-4 py-4">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {person.firstName} {person.lastName}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">{person.gender}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {Array.isArray(person.language)
                    ? person.language.join(" ,")
                    : person.language}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">{person.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataComponent;
