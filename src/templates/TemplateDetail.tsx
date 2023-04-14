import { FC } from 'react';
import { PostType } from '../types';
import { getPageUrl } from '../utils/getPageUrl';
import { NotionRenderer } from 'react-notion-x';

interface ITemplateDetail {
  blockMap: any;
  data: PostType;
}
const TemplateDetail: FC<ITemplateDetail> = ({ blockMap, data }) => {
  return (
    <>
      <NotionRenderer
        recordMap={blockMap}
        components={
          {
            // equation: <></>,
          }
        }
        mapPageUrl={getPageUrl}
      />
    </>
  );
};

export default TemplateDetail;
