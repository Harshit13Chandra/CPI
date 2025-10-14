import React, { useState } from 'react'
import axios from 'axios'

export default function LoginForm({ onLoginSuccess }) {
  const [regId, setRegId] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8080/api/login', {
        registrationId: regId,
        phoneNumber: phone,
      })
      if (res.data.status === 'success') {
        onLoginSuccess(res.data.user)
      } else {
        setError('Student not Registered')
      }
    } catch (err) {
      setError('Server Error')
    }
  }

  return (
    <div className="login-page">
      <h2>CampusLink Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Registration Number" 
          value={regId} 
          onChange={(e) => setRegId(e.target.value)} 
          required />
        <input 
          type="text" 
          placeholder="Phone Number" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}
