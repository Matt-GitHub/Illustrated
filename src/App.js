import React, { Suspense } from 'react';
import './App.css';
import { NavLink, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { ReactQueryDevtools } from 'react-query-devtools';
import ScrollToTop from './utils/ScrollToTop';
require('dotenv').config();

const SinglyLinkedListLazy = React.lazy(() =>
  import('./components/Content/SinglyLinkedList')
);

function App() {
  return (
    <div>
      <ScrollToTop />
      <ReactQueryDevtools />
      <h1 className="courseName">
        <NavLink className="homeLink" to="/">
          Illustrated JS
        </NavLink>
      </h1>
      <div className="courseContainer">
        <Route exact path={`/`}>
          <LandingPage />
        </Route>
        <Route path={`/singlyLinkedList`}>
          <Suspense fallback={<div>Loading</div>}>
            <SinglyLinkedListLazy />
          </Suspense>
        </Route>
      </div>
    </div>
  );
}

export default App;
