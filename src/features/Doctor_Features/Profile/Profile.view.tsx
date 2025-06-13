import React from 'react';
import { Outlet } from 'react-router';

export default function Profile() {
  return (
    <div>
      Doctor's Profile
      <Outlet />
    </div>
  );
}
