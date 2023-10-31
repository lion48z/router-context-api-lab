import React from 'react'
import { Outlet } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div>
      Uh Oh! We Can't Find What You're Looking For.
    <Outlet />
    </div>
  )
}

export default NotFoundPage
