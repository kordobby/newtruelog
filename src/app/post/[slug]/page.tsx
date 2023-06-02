import DetailTemplate from '@/components/DetailTemplate';
import { getPostBlocks } from '@/libs/apis/getPostBlocks';
import { getPosts } from '@/libs/apis/getPosts';
import { TPosts } from '@/libs/types';

const PostPage = async () => {
  const posts = await getPosts();
  const blockMap = await getPostBlocks('');

  console.log(blockMap);

  if (!posts) return <>...</>;
  return (
    <>
      <DetailTemplate data={posts as TPosts} blockMap={blockMap} />
    </>
  );
};

export default PostPage;
