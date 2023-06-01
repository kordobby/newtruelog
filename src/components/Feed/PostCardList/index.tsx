'use client';

import { TPosts } from '@/libs/types';
import { FC, useEffect, useState } from 'react';
import PostCard from '../PostCard';
import { useSearchParams } from 'next/navigation';

interface PostCardListInterface {
  posts?: TPosts;
}
const PostCardList: FC<PostCardListInterface> = ({ posts }) => {
  const [filterdPosts, setFilteredPosts] = useState<TPosts>([]);
  const searchParams = useSearchParams();
  const tag = searchParams.get('t');

  useEffect(() => {
    if (!posts) return;
    if (tag !== null) {
      const newArray = posts.filter((value) => value?.tags?.includes(tag));
      setFilteredPosts(newArray);
      return;
    }
    setFilteredPosts(posts);
  }, [posts, tag]);

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
