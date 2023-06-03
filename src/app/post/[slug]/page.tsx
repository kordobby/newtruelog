import DetailTemplate from '@/components/DetailTemplate';
import { getPostBlocks } from '@/libs/apis/getPostBlocks';
import { getPosts } from '@/libs/apis/getPosts';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 60,
  fetchCache = 'auto';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post?.slug,
  }));
}

const PostPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const posts = await getPosts();
  const post = posts.find((value) => value?.slug === slug);
  const blockMap = await getPostBlocks(post?.id ?? '');
  if (!post) return <></>;
  return (
    <>
      <DetailTemplate data={post} blockMap={blockMap} />
    </>
  );
};

export default PostPage;
