import DetailTemplate from '@/components/DetailTemplate';
import { getPostBlocks } from '@/libs/api/getPostBlocks';
import { getPosts } from '@/libs/api/getPosts';
import { TPosts } from '@/libs/types';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 60,
  fetchCache = 'auto';

export async function generateStaticParams() {
  const posts = await getPosts();
  const data = posts.data as TPosts;
  return data.map((post) => ({
    slug: post?.slug,
  }));
}

const PostPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const posts = await getPosts();
  const data = posts.data as TPosts;
  const post = data.find((value) => value?.slug === slug);
  const blockMap = await getPostBlocks(post?.id ?? '');

  if (!post) return <></>;
  return (
    <>
      <DetailTemplate data={post} blockMap={blockMap?.data} />
    </>
  );
};

export default PostPage;
