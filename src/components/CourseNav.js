import React from 'react';
import { NavLink } from 'react-router-dom';

const supportedCourses = ['Singly Linked List'];

const Courses = () => {
  return (
    <nav className="courseNavigation">
      {/* <h3>Data Structures</h3> */}
      <ul>
        {supportedCourses.map((course, id) => {
          return (
            <li key={id} className="courseLinkListItem">
              <NavLink className="courseLink" to="/singlyLinkedList">
                {course}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Courses;
