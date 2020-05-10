import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import SinglePost from '../../components/Post/Post';
import * as selectorsBlog from '../../redux/blog/blogSelectors';
import * as operationsBlog from '../../redux/blog/blogOperations';
import { Store, Post } from '../../types/types';

interface Dispatch {
  getPost: (id: string) => void;
  deletePost: (id: string) => void;
}

interface StatePost {
  postById: Post;
}

const PostPage = ({ postById, getPost, deletePost }): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  return <>{postById && <SinglePost post={postById} deletePost={deletePost} />}</>;
};

const mapStateToProps = (store: Store): StatePost => ({
  postById: selectorsBlog.getPostById(store),
});

const mapDispatchToProps = (dispatch: (any) => void): Dispatch => ({
  getPost: (id: string): void => dispatch(operationsBlog.getPostById(id)),
  deletePost: (id: string): void => dispatch(operationsBlog.deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
