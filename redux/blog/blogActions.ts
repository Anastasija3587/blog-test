import types from './blogTypes';
import * as moduleTypes from '../../types/types';

export const createPostStart = (): moduleTypes.Response => ({
  type: types.CREATE_POST_START,
});

export const createPostSuccess = (post): moduleTypes.Response => ({
  type: types.CREATE_POST_SUCCESS,
  payload: { post },
});

export const createPostError = (error): moduleTypes.Response => ({
  type: types.CREATE_POST_ERROR,
  payload: { error },
});

export const getPostsStart = (): moduleTypes.Response => ({
  type: types.GET_POSTS_START,
});

export const getPostsSuccess = (posts): moduleTypes.Response => ({
  type: types.GET_POSTS_SUCCESS,
  payload: { posts },
});

export const getPostsError = (error): moduleTypes.Response => ({
  type: types.GET_POSTS_ERROR,
  payload: { error },
});

export const detailsPostStart = (): moduleTypes.Response => ({
  type: types.DETAILS_POST_START,
});

export const detailsPostSuccess = (post): moduleTypes.Response => ({
  type: types.DETAILS_POST_SUCCESS,
  payload: { post },
});

export const detailsPostError = (error): moduleTypes.Response => ({
  type: types.DETAILS_POST_ERROR,
  payload: { error },
});

export const deleteStart = (): moduleTypes.Response => ({
  type: types.DELETE_POST_START,
});

export const deleteSuccess = (id): moduleTypes.Response => ({
  type: types.DELETE_POST_SUCCESS,
  payload: { id },
});

export const deleteError = (error): moduleTypes.Response => ({
  type: types.DELETE_POST_ERROR,
  payload: { error },
});
