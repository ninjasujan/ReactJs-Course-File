import React, { Component } from 'react';
import './Blog.css';
// import axios from 'axios';
// import axios from '../../axios';
import Posts from './Posts/Posts';
import { Route, NavLink } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  activeStyle={{
                    textDecoration: 'underline',
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  to={{
                    // pathname: this.props.match.url + '/new-post',
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  NEW POST
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
