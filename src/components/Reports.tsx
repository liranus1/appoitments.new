import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Reports: React.FC = () => {
  const data = [
    { name: 'Jan', revenue: 4000, appointments: 24 },
    { name: 'Feb', revenue: 3000, appointments: 18 },
    { name: 'Mar', revenue: 5000, appointments: 30 },
    { name: 'Apr', revenue: 4500, appointments: 27 },
    { name: 'May', revenue: 6000, appointments: 36 },
    { name: 'Jun', revenue: 5500, appointments: 33 },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Reports and Statistics</h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue ($)" />
            <Bar yAxisId="right" dataKey="appointments" fill="#82ca9d" name="Appointments" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Reports