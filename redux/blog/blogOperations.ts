import * as blogAction from '../blog/blogActions';
import * as API from '../../services/api';
import { Dynamic, Post } from '../../types/types';

export const getPosts = () => (dispatch): void => {
  dispatch(blogAction.getPostsStart());
  API.getAllPosts()
    .then((res: Dynamic) => dispatch(blogAction.getPostsSuccess(res.data)))
    .catch(err => dispatch(blogAction.getPostsError(err)));
};

export const getPostById = (id: string) => (dispatch): void => {
  dispatch(blogAction.detailsPostStart());
  API.getPostById(id)
    .then((res: Dynamic) => dispatch(blogAction.detailsPostSuccess(res.data)))
    .catch(err => dispatch(blogAction.detailsPostError(err)));
};

export const createPost = (post: Post) => (dispatch): void => {
  dispatch(blogAction.createPostStart());
  API.createPost(post)
    .then((res: Dynamic) => dispatch(blogAction.createPostSuccess(res.data)))
    .catch(err => dispatch(blogAction.createPostError(err)));
};

export const deletePost = (id: string) => (dispatch): void => {
  dispatch(blogAction.deleteStart());
  API.deletePost(id)
    .then(res => dispatch(blogAction.deleteSuccess(id)))
    .catch(err => dispatch(blogAction.deleteError(err)));
};
