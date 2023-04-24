import MobileSearch from '../Search/MobileSearch';
import FeedHeader from './FeedHeader';
import PostCard from './PostCard';
import styled from 'styled-components';
const Feed = () => {
  const dummy = [1, 2, 3];
  return (
    <FeedWrapper>
      <FeedHeader />
      <MobileSearch />
      {dummy.map((value, index) => {
        return <PostCard key={value} />;
      })}
    </FeedWrapper>
  );
};

export default Feed;

const FeedWrapper = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
`;
