import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostsList from '../components/PostsList/PostsList';
import * as selectorsBlog from '../redux/blog/blogSelectors';
import { Store, Post } from '../types/types';
import * as operationsBlog from '../redux/blog/blogOperations';
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
  posts: selectorsBlog.getPosts(store),
  isLoading: selectorsBlog.getIsLoader(store),
});

const mapDispatchToProps = (dispatch: (any) => void): GetPosts => ({
  getPosts: (): void => dispatch(operationsBlog.getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
