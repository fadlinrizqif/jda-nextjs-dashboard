import { list } from "@/app/lib/list-customers"
import Link from "next/link"

export default function Page() {
  return (

    <div>
      <div>
        <div>
          <h2>Contacts List</h2>

          <table className="w-full border-collapse shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left border-b border-gray-300 font-semibold text-gray-700">No.</th>
                <th className="p-3 text-left border-b border-gray-300 font-semibold text-gray-700">Name</th>
                <th className="p-3 text-left border-b border-gray-300 font-semibold text-gray-700">Phone Number</th>
                <th className="p-3 text-left border-b border-gray-300 font-semibold text-gray-700">Email</th>
                <th className="p-3 text-left border-b border-gray-300 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {list.map((el) => {
                return (
                  <tr key={el.id} className="hover:bg-gray-50">
                    <td className="p-3 border-b border-gray-200">{el.id}</td>
                    <td className="p-3 border-b border-gray-200">{el.name}</td>
                    <td className="p-3 border-b border-gray-200">{el.phone}</td>
                    <td className="p-3 border-b border-gray-200">{el.email}</td>
                    <td className="p-3 border-b border-gray-200">
                      <Link href={`customers/${el.id}`} className="text-blue-600 hover:text-blue-800 hover:underline">details</Link>
                    </td>
                  </tr>
                )
              })}


            </tbody>
          </table>

        </div>
      </div>
    </div>

  )
}
