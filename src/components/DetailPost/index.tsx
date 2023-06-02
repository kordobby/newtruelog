import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
import { TPost } from '@/libs/types';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Code,
  Collection,
  Equation,
  Modal,
  Pdf,
  mapPageUrl,
} from './notionComponents';

export interface IDetailPostProps {
  blockMap: ExtendedRecordMap;
  data: TPost;
}

const DetailPost: FC<IDetailPostProps> = ({ blockMap, data }) => {
  return (
    <>
      ...hihi
      {/* <NotionRenderer
        recordMap={blockMap}
        components={{
          Code,
          Collection,
          Equation,
          Modal,
          Pdf,
          nextImage: Image,
          nextLink: Link,
        }}
        mapPageUrl={mapPageUrl}
      /> */}
    </>
  );
};

export default DetailPost;
