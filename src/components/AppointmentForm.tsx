import React, { useState } from 'react'

interface Appointment {
  date: string
  time: string
  service: string
  customerName: string
  customerEmail: string
}

const AppointmentForm: React.FC = () => {
  const [appointment, setAppointment] = useState<Appointment>({
    date: '',
    time: '',
    service: '',
    customerName: '',
    customerEmail: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setAppointment(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Appointment booked:', appointment)
    // Here you would typically send this data to your backend
    alert('Appointment booked successfully!')
    setAppointment({
      date: '',
      time: '',
      service: '',
      customerName: '',
      customerEmail: '',
    })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="date" className="block mb-1">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="time" className="block mb-1">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="service" className="block mb-1">Service</label>
          <select
            id="service"
            name="service"
            value={appointment.service}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select a service</option>
            <option value="haircut">Haircut</option>
            <option value="massage">Massage</option>
            <option value="nails">Nails</option>
          </select>
        </div>
        <div>
          <label htmlFor="customerName" className="block mb-1">Name</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={appointment.customerName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="customerEmail" className="block mb-1">Email</label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            value={appointment.customerEmail}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Book Appointment
        </button>
      </form>
    </div>
  )
}

export default AppointmentForm