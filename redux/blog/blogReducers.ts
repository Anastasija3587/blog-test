import { combineReducers } from 'redux';
import types from '../blog/blogTypes';
import { Post } from '../../types/types';

const posts = (state = [], action): Array<Post> => {
  switch (action.type) {
    case types.GET_POSTS_SUCCESS:
      return action.payload.posts;

    case types.CREATE_POST_SUCCESS:
      return [...state, action.payload.post];

    case types.DELETE_POST_SUCCESS:
      return state.filter(post => post.id !== action.payload.id);

    default:
      return state;
  }
};

const singlePost = (state = null, action): Post => {
  switch (action.type) {
    case types.DETAILS_POST_SUCCESS:
      return action.payload.post;

    default:
      return state;
  }
};

const isLoading = (state = false, action): boolean => {
  switch (action.type) {
    case types.CREATE_POST_START:
    case types.DELETE_POST_START:
    case types.DETAILS_POST_START:
    case types.GET_POSTS_START:
      return true;
    case types.CREATE_POST_SUCCESS:
    case types.CREATE_POST_ERROR:
    case types.DELETE_POST_SUCCESS:
    case types.DELETE_POST_ERROR:
    case types.DETAILS_POST_SUCCESS:
    case types.DETAILS_POST_ERROR:
    case types.GET_POSTS_SUCCESS:
    case types.GET_POSTS_ERROR:
      return false;
    default:
      return state;
  }
};

const isError = (state = null, action): object => {
  switch (action.type) {
    case types.CREATE_POST_ERROR:
    case types.DELETE_POST_ERROR:
    case types.DETAILS_POST_ERROR:
    case types.GET_POSTS_ERROR:
      return action.payload.error;

    case types.CREATE_POST_SUCCESS:
    case types.CREATE_POST_START:
    case types.DELETE_POST_SUCCESS:
    case types.DELETE_POST_START:
    case types.DETAILS_POST_SUCCESS:
    case types.DETAILS_POST_START:
    case types.GET_POSTS_SUCCESS:
    case types.GET_POSTS_START:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  posts,
  singlePost,
  isLoading,
  isError,
});
