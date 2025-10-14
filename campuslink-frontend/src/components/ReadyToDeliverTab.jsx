import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar.jsx'

export default function ReadyToDeliverTab({ user }) {
  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurants, setSelectedRestaurants] = useState([])
  const [readyGrocery, setReadyGrocery] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8080/api/restaurants')
      .then(res => setRestaurants(res.data))
  }, [])

  const toggleRestaurant = (rest) => {
    if (selectedRestaurants.includes(rest))
      setSelectedRestaurants(selectedRestaurants.filter(r => r !== rest))
    else
      setSelectedRestaurants([...selectedRestaurants, rest])
  }

  const handleSubmit = () => {
    axios.post('http://localhost:8080/api/deliverer/status', {
      userId: user.registrationId,
      grocery: readyGrocery,
      restaurants: selectedRestaurants
    })
  }

  return (
    <div className="tab-section">
      <h2>Ready to Deliver</h2>
      <label>
        <input type="checkbox" checked={readyGrocery} onChange={() => setReadyGrocery(!readyGrocery)} />
        Ready to deliver groceries
      </label>

      <h4>Select restaurants:</h4>
      <SearchBar data={restaurants.map(r => r.name)} onSelect={toggleRestaurant} />

      <div className="summary">
        <h4>Selected Restaurants:</h4>
        <ul>{selectedRestaurants.map((r, i) => <li key={i}>{r}</li>)}</ul>
      </div>

      <button onClick={handleSubmit}>Submit Availability</button>
    </div>
  )
}
