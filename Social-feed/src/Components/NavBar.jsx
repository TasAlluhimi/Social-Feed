import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Avatar } from '@nextui-org/react';


function NavBar() {
  
  function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };

  return (
    <>
        <nav class="flex flex-wrap items-center justify-between p-3 bg-white border-b-1 fixed z-[999] w-full">
    <div className='font-bold text-2xl'>
      Social Feed
    </div>
    <div class="flex md:hidden">
        <button onClick={toggleMenu} id="hamburger">
          <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
        </button>
    </div>
    <div
        class="toggle hidden w-full md:w-auto md:flex text-left text-bold mt-5 md:mt-0 md:border-none">
        <Link to="/"
            class="block md:inline-block px-3 py-3 md:border-none">Home
        </Link>
        <Link to="/"
            class="block md:inline-block px-3 py-3 md:border-none">Activity
        </Link>
        <Link to="/Treanding"
            class="block md:inline-block px-3 py-3 md:border-none lg:hidden">Treanding
        </Link>
        <a href="https://www.linkedin.com/in/tasneem-alluhimi-a45541215/" target='_blank'
            class="block md:inline-block px-3 py-3 md:border-none">About
        </a>

        <div className='px-3 py-3'>

        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="default"
              name="Tasneem"
              size="sm"
              // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">Tasneem@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            {/* <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem> */}
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </div>
    </div>
</nav>
    </>
  )
}

export default NavBar