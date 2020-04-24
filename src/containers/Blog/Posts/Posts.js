import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: [],
    error: false,
  };

  selectPostHandler = (id) => {
    // this.setState({
    //   selectedPost: id,
    // });
    // this.props.history.push({ pathname: '/' + id });
    this.props.history.push('/posts/' + id);
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const updatedPost = response.data.slice(0, 4).map((post) => {
          return {
            ...post,
            author: 'Sujan',
          };
        });
        this.setState({
          posts: updatedPost,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    let posts = (
      <p style={{ textAlign: 'center', color: 'red' }}>
        Something went wrong.!
      </p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          // <Link to={'/posts' + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.selectPostHandler(post.id)}
          />
          // </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + '/:id'}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
