import React, { useState } from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CalendarComponent from './components/Calendar'
import AppointmentForm from './components/AppointmentForm'
import CustomerList from './components/CustomerList'
import Reports from './components/Reports'

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<string>('calendar')

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar setActiveView={setActiveView} />
        <main className="flex-1 p-6">
          {activeView === 'calendar' && <CalendarComponent />}
          {activeView === 'appointments' && <AppointmentForm />}
          {activeView === 'customers' && <CustomerList />}
          {activeView === 'reports' && <Reports />}
        </main>
      </div>
    </div>
  )
}

export default App