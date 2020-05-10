import React from 'react';
import Link from 'next/link';
import { Container, Title, Body, BtnDelete } from './Post.styled';

const Post = ({ post, deletePost }): JSX.Element => {
  return (
    <Container>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
      <Link href="/">
        <BtnDelete onClick={(): void => deletePost(post.id)} type="button">
          Delete
        </BtnDelete>
      </Link>
    </Container>
  );
};

export default Post;
