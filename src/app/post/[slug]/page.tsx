import DetailTemplate from '@/components/DetailTemplate';
import { getPostBlocks } from '@/libs/apis/getPostBlocks';
import { getPosts } from '@/libs/apis/getPosts';
import { useParams } from 'next/navigation';

const PostPage = async () => {
  const posts = await getPosts();
  const { slug } = useParams();

  const post = posts.find((value) => value.slug === slug);
  const blockMap = await getPostBlocks(post?.id ?? '');
  if (!post) return <></>;
  return (
    <>
      <DetailTemplate data={post} blockMap={blockMap} />
    </>
  );
};

export default PostPage;
