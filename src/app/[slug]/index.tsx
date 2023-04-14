import { PageProps } from '@/.next/types/app/layout';
import { PostType } from '@/src/types';
export interface IPostDetail {
  post: PostType;
  blockMap: any;
}

const PostDetail = ({ post, blockMap }: IPostDetail) => {
  if (!post) return <></>;
  return (
    <div>
      <p>Error!</p>
    </div>
  );
};

export default PostDetail;
