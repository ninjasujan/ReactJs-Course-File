import React, { Component } from 'react';
import './Blog.css';
// import axios from 'axios';
// import axios from '../../axios';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/new-post">NEW POST</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>Home</h1>} />
      </div>
    );
  }
}

export default Blog;
