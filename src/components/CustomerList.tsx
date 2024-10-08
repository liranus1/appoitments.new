import React, { useState } from 'react'

interface Customer {
  id: number
  name: string
  email: string
  appointmentHistory: string[]
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', appointmentHistory: ['2023-03-15: Haircut', '2023-04-02: Massage'] },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', appointmentHistory: ['2023-03-20: Nails', '2023-04-10: Haircut'] },
  ])

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Customer List</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Appointment History</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id} className="border-b">
              <td className="p-2">{customer.name}</td>
              <td className="p-2">{customer.email}</td>
              <td className="p-2">
                <ul>
                  {customer.appointmentHistory.map((appointment, index) => (
                    <li key={index}>{appointment}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerList