import FeedHeader from './FeedHeader';
import PostCard from './PostCard';

const Feed = () => {
  const dummy = [1, 2, 3];
  return (
    <>
      <FeedHeader />
      {dummy.map((value, index) => {
        return <PostCard key={value} />;
      })}
    </>
  );
};

export default Feed;
