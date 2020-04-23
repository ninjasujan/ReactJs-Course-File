import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
    error: false,
  };

  selectPostHandler = (id) => {
    this.setState({
      selectedPost: id,
    });
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
          <Link to={'/' + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.selectPostHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
