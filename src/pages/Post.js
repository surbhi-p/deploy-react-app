import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { PostItem } from '../components/PostItem';

export const Post = () => {
    const post = useLoaderData();
  return (
    <PostItem post={post} />
  )
}

export function loader({ params }) {
    const postId = params.id;
    return fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
}
