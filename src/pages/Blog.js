import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { PostList } from '../components/PostList';

export const Blog = () => {
    const posts = useLoaderData();
  return (
    <PostList posts = {posts} />
  )
}

export function loader() {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}
