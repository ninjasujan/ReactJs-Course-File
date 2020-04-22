import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    const posts = axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const updatedPost = response.data.slice(0, 4).map((post) => {
          return {
            ...post,
            author: 'Maimilian',
          };
        });
        this.setState({
          posts: updatedPost,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const posts = this.state.posts.map((post) => {
      return <Post title={post.title} author={post.author} key={post.id} />;
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
