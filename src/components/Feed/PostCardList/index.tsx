'use client';

import { TPosts } from '@/libs/types';
import { FC, useEffect, useState } from 'react';
import PostCard from '../PostCard';

interface PostCardListInterface {
  posts?: TPosts;
}
const PostCardList: FC<PostCardListInterface> = ({ posts }) => {
  const [filterdPosts, setFilteredPosts] = useState<TPosts>([]);

  useEffect(() => {
    if (!posts) return;
    setFilteredPosts(posts);
  }, [posts]);

  if (!posts) return <></>;
  return (
    <>
      {filterdPosts?.map((value, index) => {
        return <PostCard key={`post-${value.id}-${index}`} post={value} />;
      })}
    </>
  );
};

export default PostCardList;
