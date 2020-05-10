import { Store, Post } from '../../types/types';

export const getPosts = (store: Store): Array<Post> => store.blog.posts;

export const getPostById = (store: Store): Post => store.blog.singlePost;

export const getIsLoader = (store: Store): boolean => store.blog.IsLoading;
