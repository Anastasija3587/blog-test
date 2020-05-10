export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface Response {
  [key: string]: string | object;
}

export interface ListProps {
  posts: Array<Post>;
}

export interface Store {
  blog: {
    posts: Array<Post>;
    singlePost: Post;
    IsLoading: boolean;
    IsError: {};
  };
}
