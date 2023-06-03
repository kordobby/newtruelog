import React, { FC } from 'react';
import MobileFilter from '../Category/MobileFilter';
import MobileSearch from '../Search/MobileSearch';
import FeedHeader from './FeedHeader';
import FeedWrapper from './FeedWrapper';
import PostCardList from './PostCardList';
import { TPosts, TTags } from '@/libs/types';

interface IFeedProps {
  posts: TPosts;
  tags: TTags;
}
const Feed: FC<IFeedProps> = ({ posts, tags }) => {
  return (
    <FeedWrapper>
      <React.Fragment>
        <FeedHeader total={posts} />
        <MobileFilter tags={tags} />
        <MobileSearch />
        <PostCardList posts={posts} />
      </React.Fragment>
    </FeedWrapper>
  );
};

export default Feed;
