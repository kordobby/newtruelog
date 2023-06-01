import React from 'react';
import MobileFilter from '../Category/MobileFilter';
import MobileSearch from '../Search/MobileSearch';
import FeedHeader from './FeedHeader';
import FeedWrapper from './FeedWrapper';
import { getPosts } from '@/libs/apis/getPosts';
import PostCardList from './PostCardList';
import { getTagGroups } from '@/utils/getTagGroups';

const Feed = async () => {
  const posts = await getPosts();
  const tags = getTagGroups('tags', posts);

  return (
    <FeedWrapper>
      <React.Fragment>
        <FeedHeader />
        <MobileFilter tags={tags} />
        <MobileSearch />
        <PostCardList posts={posts} />
      </React.Fragment>
    </FeedWrapper>
  );
};

export default Feed;
