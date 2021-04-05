import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Homepage} from "./Homepage/Homepage";
import {Gallery} from "./gallery/Gallery";

function AppRouter() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/gallery">Component Gallery</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Homepage} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </Router>
  );
}

export default AppRouter;
