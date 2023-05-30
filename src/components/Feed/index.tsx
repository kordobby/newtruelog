import MobileFilter from '../Category/MobileFilter';
import MobileSearch from '../Search/MobileSearch';
import FeedHeader from './FeedHeader';
import FeedWrapper from './FeedWrapper';
import { getPosts } from '@/libs/apis/getPosts';
import PostCardList from './PostCardList';

const Feed = async () => {
  const posts = await getPosts();

  return (
    <FeedWrapper>
      <>
        <FeedHeader />
        <MobileFilter />
        <MobileSearch />
        <PostCardList posts={posts} />
      </>
    </FeedWrapper>
  );
};

export default Feed;
