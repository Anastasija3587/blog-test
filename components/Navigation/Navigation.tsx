import React from 'react';
import Link from 'next/link';
import { Header, HeaderNav, HeaderLink, HeaderItem } from './Navigation.styled';

const Navigation = (): JSX.Element => {
  return (
    <Header>
      <HeaderNav>
        <Link href="/">
          <HeaderItem>
            <HeaderLink>Your Posts</HeaderLink>
          </HeaderItem>
        </Link>
        <Link href="/posts/new">
          <HeaderItem>
            <HeaderLink>add Post</HeaderLink>
          </HeaderItem>
        </Link>
      </HeaderNav>
    </Header>
  );
};

export default Navigation;
