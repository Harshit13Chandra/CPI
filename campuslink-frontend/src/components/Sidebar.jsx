import React from 'react'

export default function Sidebar({ user }) {
  return (
    <aside className="sidebar">
      <h3>User Info</h3>
      <p><b>Reg ID:</b> {user.registrationId}</p>
      <p><b>Phone:</b> {user.phoneNumber}</p>
      <p><b>Rating:</b> {user.rating ?? 'N/A'}</p>
    </aside>
  )
}
