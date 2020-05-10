import React from 'react';
import { WrapPost, PostList } from './PostsList.styled';
import { ListProps, Post } from '../../types/types';
import PostListItem from '../PostItem/PostItem';

const Posts = ({ posts = [] }: ListProps): JSX.Element => {
  return (
    <>
      <WrapPost>
        <PostList>
          {posts.map((post: Post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </PostList>
      </WrapPost>
    </>
  );
};

export default Posts;
