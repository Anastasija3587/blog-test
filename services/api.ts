import axios from 'axios';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red/';

export const getAllPosts = (): Promise<{}> => axios.get('posts');

export const createPost = (post): Promise<{}> => axios.post('posts', post);

export const getPostById = (postId): Promise<{}> => axios.get(`posts/${postId}?_embed=comments`);

export const deletePost = (postId): Promise<{}> => axios.delete(`posts/${postId}`);
