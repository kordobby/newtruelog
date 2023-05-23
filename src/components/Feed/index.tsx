import MobileFilter from '../Category/MobileFilter';
import MobileSearch from '../Search/MobileSearch';
import FeedHeader from './FeedHeader';
import PostCard from './PostCard';
import FeedWrapper from './FeedWrapper';
import { getPosts } from '@/libs/apis/getPosts';

const Feed = () => {
  const dummy = [1, 2, 3];
  const response = getPosts();

  return (
    <FeedWrapper>
      <>
        <FeedHeader />
        <MobileFilter />
        <MobileSearch />
        {dummy.map((value, index) => {
          return <PostCard key={value} />;
        })}
      </>
    </FeedWrapper>
  );
};

export default Feed;
