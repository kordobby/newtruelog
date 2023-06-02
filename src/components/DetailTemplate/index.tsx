import { FC } from 'react';
import DetailPost, { IDetailPostProps } from '../DetailPost';

const DetailTemplate: FC<IDetailPostProps> = (props) => {
  return <DetailPost {...props} />;
};

export default DetailTemplate;
