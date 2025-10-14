import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function SearchBar({ data, endpoint, onSelect }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (endpoint && query.length > 1) {
      axios.get(`${endpoint}?q=${query}`).then(res => setResults(res.data))
    } else if (data) {
      setResults(data.filter(d => d.toLowerCase().includes(query.toLowerCase())))
    }
  }, [query])

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((r, i) => (
            <li key={i} onClick={() => onSelect(r)}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
