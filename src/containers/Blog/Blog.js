import React, { Component } from 'react';
import './Blog.css';
// import axios from 'axios';
// import axios from '../../axios';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  activeClassName="active"
                  activeStyle={{
                    textDecoration: 'underline',
                  }}
                >
                  POSTS
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

        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" exact component={NewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>404 Not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
