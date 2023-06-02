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
  const keyword = searchParams.get('k');
  const sort = searchParams.get('s');

  useEffect(() => {
    if (!posts) return;
    let postList = [] as TPosts;
    postList = posts;
    if (tag !== null) {
      postList = postList.filter((value) => value?.tags?.includes(tag));
    }
    if (keyword !== null) {
      postList = postList.filter((value) => value?.title?.includes(keyword));
    }
    if (sort === 'asc') {
      postList = postList.reverse();
    }
    setFilteredPosts(postList);
  }, [posts, tag, keyword, sort]);

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
