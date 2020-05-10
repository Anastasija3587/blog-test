import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostsList from '../components/PostsList/PostsList';
import * as selectorBlog from '../redux/blog/blogSelectors';
import { Store, Post } from '../types/types';
import * as operationBlog from '../redux/blog/blogOperations';
import Loader from '../components/Loader/Loader';

interface Posts {
  posts: Array<Post>;
  isLoading: boolean;
}

interface GetPosts {
  getPosts: () => void;
}

const App = ({ posts, getPosts, isLoading }): JSX.Element => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      {isLoading && <Loader />}
      {posts && <PostsList posts={posts} />}
    </>
  );
};

const mapStateToProps = (store: Store): Posts => ({
  posts: selectorBlog.getPosts(store),
  isLoading: selectorBlog.getIsLoader(store),
});

const mapDispatchToProps = (dispatch: (any) => void): GetPosts => ({
  getPosts: (): void => dispatch(operationBlog.getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
