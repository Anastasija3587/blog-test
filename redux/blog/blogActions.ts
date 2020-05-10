import types from './blogTypes';
import { Dynamic } from '../../types/types';

export const createPostStart = (): Dynamic => ({
  type: types.CREATE_POST_START,
});

export const createPostSuccess = (post): Dynamic => ({
  type: types.CREATE_POST_SUCCESS,
  payload: { post },
});

export const createPostError = (error): Dynamic => ({
  type: types.CREATE_POST_ERROR,
  payload: { error },
});

export const getPostsStart = (): Dynamic => ({
  type: types.GET_POSTS_START,
});

export const getPostsSuccess = (posts): Dynamic => ({
  type: types.GET_POSTS_SUCCESS,
  payload: { posts },
});

export const getPostsError = (error): Dynamic => ({
  type: types.GET_POSTS_ERROR,
  payload: { error },
});

export const detailsPostStart = (): Dynamic => ({
  type: types.DETAILS_POST_START,
});

export const detailsPostSuccess = (post): Dynamic => ({
  type: types.DETAILS_POST_SUCCESS,
  payload: { post },
});

export const detailsPostError = (error): Dynamic => ({
  type: types.DETAILS_POST_ERROR,
  payload: { error },
});

export const deleteStart = (): Dynamic => ({
  type: types.DELETE_POST_START,
});

export const deleteSuccess = (id): Dynamic => ({
  type: types.DELETE_POST_SUCCESS,
  payload: { id },
});

export const deleteError = (error): Dynamic => ({
  type: types.DELETE_POST_ERROR,
  payload: { error },
});
