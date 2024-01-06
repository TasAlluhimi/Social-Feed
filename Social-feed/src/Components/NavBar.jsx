import React from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   
    NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Button} from "@nextui-org/react";

import { Link } from 'react-router-dom';


function NavBar() {

    const menuItems = [
        { label: "Home", url: "/" },
        { label: "Activity", url: "/" },
        { label: "About Us", url: "/" },
      ];


  return (
    <>
        <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Social Feed</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Social Feed</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link color="foreground" to="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/" aria-current="page" color="warning">
          Activity
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" to="/" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color='foreground'
              to={`${item.url}`}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </>
  )
}

export default NavBar