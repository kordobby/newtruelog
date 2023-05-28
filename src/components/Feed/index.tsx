import MobileFilter from '../Category/MobileFilter';
import MobileSearch from '../Search/MobileSearch';
import FeedHeader from './FeedHeader';
import PostCard from './PostCard';
import FeedWrapper from './FeedWrapper';
import { getPosts } from '@/libs/apis/getPosts';
import { getPostBlocks } from '@/libs/apis/getPostBlocks';

const Feed = async () => {
  const posts = await getPosts();

  return (
    <FeedWrapper>
      <>
        <FeedHeader />
        <MobileFilter />
        <MobileSearch />
        {posts.map((value, index) => {
          return <PostCard key={`post-${value.id}-${index}`} post={value} />;
        })}
      </>
    </FeedWrapper>
  );
};

export default Feed;
