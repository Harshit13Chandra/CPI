import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function SearchBar({ data, endpoint, onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const wrapperRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // fetch data when typing
  useEffect(() => {
    if (endpoint && query.length > 1) {
      axios
        .get(`${endpoint}?q=${query}`)
        .then((res) => {
          setResults(res.data);
          setShowResults(true);
        })
        .catch(() => setResults([]));
    } else if (data) {
      const filtered = data.filter((d) =>
        (typeof d === "string" ? d : d.name)
          .toLowerCase()
          .includes(query.toLowerCase())
      );
      setResults(filtered);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query]);

  // when selecting an item
  const handleSelect = (item) => {
    const label = typeof item === "object" ? item.name : item;
    onSelect(label);
    setQuery("");          // clear input
    setShowResults(false); // close dropdown
  };

  return (
    <div className="search-bar" ref={wrapperRef}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowResults(results.length > 0)}
      />

      {showResults && results.length > 0 && (
        <ul className="search-results">
          {results.map((r, i) => {
            const label = typeof r === "object" ? r.name : r;
            return (
              <li key={i} onClick={() => handleSelect(r)}>
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
