import { PostType } from '@/src/types';
import { FC } from 'react';
import dynamic from 'next/dynamic';

interface IComment {
  data: PostType;
}

const UtterancesBox = dynamic(
  () => {
    return import('../Comments/Utterances');
  },
  { ssr: false },
);

const Comment: FC<IComment> = ({ data }) => {
  return (
    <div>
      <UtterancesBox issueTerm={data.id} />
    </div>
  );
};

export default Comment;
