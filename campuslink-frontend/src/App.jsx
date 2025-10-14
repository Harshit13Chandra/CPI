import React, { useState } from 'react'
import LoginForm from './components/LoginForm.jsx'
import Sidebar from './components/Sidebar.jsx'
import OrderTab from './components/OrderTab.jsx'
import ReadyToDeliverTab from './components/ReadyToDeliverTab.jsx'
import './styles/style.css'

export default function App() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('order')

  if (!user) {
    return <LoginForm onLoginSuccess={setUser} />
  }

  return (
    <div className="container">
      <Sidebar user={user} />
      <main className="main">
        <div className="tab-buttons">
          <button 
            className={activeTab === 'order' ? 'active' : ''} 
            onClick={() => setActiveTab('order')}>
            Order
          </button>
          <button 
            className={activeTab === 'ready' ? 'active' : ''} 
            onClick={() => setActiveTab('ready')}>
            Ready to Deliver
          </button>
        </div>
        <div className="content">
          {activeTab === 'order' ? (
            <OrderTab user={user} />
          ) : (
            <ReadyToDeliverTab user={user} />
          )}
        </div>
      </main>
    </div>
  )
}
