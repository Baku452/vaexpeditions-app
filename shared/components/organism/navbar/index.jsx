import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { Logo, Navigation, Toggle } from '@/components/index';

function NavToolbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar d-lg-none d-block pb-4">
      <Logo />
      <Toggle />
      <Navigation />
    </Navbar>
  );
}

export { NavToolbar };
