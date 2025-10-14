import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar.jsx'

export default function OrderTab({ user }) {
  const [groceryList, setGroceryList] = useState([])
  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [dishes, setDishes] = useState([])

  // Load restaurant list
  useEffect(() => {
    axios.get('http://localhost:8080/api/restaurants')
      .then(res => setRestaurants(res.data))
      .catch(() => {})
  }, [])

  const handleGrocerySelect = (item) => {
    setGroceryList([...groceryList, item])
  }

  const handleSubmitGrocery = () => {
    axios.post('http://localhost:8080/api/grocery/order', { items: groceryList, userId: user.registrationId })
  }

  const handleRestaurantSelect = (rest) => {
    setSelectedRestaurant(rest)
    axios.get(`http://localhost:8080/api/restaurants/${rest.id}/dishes`)
      .then(res => setDishes(res.data))
  }

  const handleFoodOrder = (dish) => {
    axios.post('http://localhost:8080/api/food/order', { restaurant: selectedRestaurant.id, dish, userId: user.registrationId })
  }

  return (
    <div className="tab-section">
      <h2>Place Order</h2>
      <div className="order-options">
        <section>
          <h3>Grocery Order</h3>
          <SearchBar endpoint="http://localhost:8080/api/grocery/items" onSelect={handleGrocerySelect} />
          <div className="summary">
            <h4>Selected Items:</h4>
            <ul>{groceryList.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
          <button onClick={handleSubmitGrocery}>Submit Grocery Request</button>
        </section>

        <section>
          <h3>Food Order</h3>
          <SearchBar data={restaurants.map(r => r.name)} onSelect={handleRestaurantSelect} />
          {selectedRestaurant && (
            <>
              <h4>Dishes from {selectedRestaurant.name}</h4>
              <SearchBar data={dishes.map(d => d.name)} onSelect={handleFoodOrder} />
            </>
          )}
        </section>
      </div>
    </div>
  )
}
