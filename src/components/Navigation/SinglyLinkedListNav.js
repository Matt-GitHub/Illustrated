import React from 'react';
import { NavLink } from 'react-router-dom';

const SinglyLinkedListNav = ({ navList }) => {
  return navList.isLoading ? (
    '...Loading'
  ) : navList.isError ? (
    navList.error.message
  ) : (
    <>
      <nav className="courseNavigation">
        <ul>
          {navList.data.navigation.navigation.map((nav, id) => {
            return (
              // Replace all whitespace for cleaner links
              <li key={id} className="courseLinkListItem">
                <NavLink
                  activeClassName="activeLink"
                  className="courseLink"
                  to={`/singlyLinkedList/${nav.replace(/\s+/g, '')}`}
                >
                  {nav}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SinglyLinkedListNav;
