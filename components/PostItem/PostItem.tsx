import React from 'react';
import { Item, Title, Body } from './PostItem.styled';
import Link from 'next/link';

const PostItem = ({ post }): JSX.Element => {
  return (
    <>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <Item>
          <Title>{post.title.length > 20 ? post.title.slice(0, 20) + '...' : post.title}</Title>
          <Body>{post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body}</Body>
        </Item>
      </Link>
    </>
  );
};

export default PostItem;
