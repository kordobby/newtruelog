import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
import { TPost } from '@/libs/types';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
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
    <NotionRendererWrapper>
      <NotionRenderer
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
      />
    </NotionRendererWrapper>
  );
};

export default DetailPost;

const NotionRendererWrapper = styled.div`
  svg {
    display: none;
  }
  .notion {
    font-family: Pretendard, Roboto, sans-serif;
    color: blue
    overflow-wrap: break-word;
  }
  .notion,
  .notion-text,
  .notion-quote,
  .notion-h-title {
    padding: 0;
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .notion-list li {
    padding-top: 0;
    padding-bottom: 0;
  }
  .notion-page-link {
    color: inherit;
  }
  svg + .notion-page-title-text {
    border: 1px solid blue;
  }
  .notion-bookmark {
    border: 1px solid red;
    color: inherit;
  }
  .notion-bookmark .notion-bookmark-title,
  .notion-bookmark .notion-bookmark-link div {
    color: blue;
  }
  .notion-bookmark .notion-bookmark-description {
    color: yellow;
  }
  .notion-code > code {
    color: red;
  }
  pre[class*='language-'] {
    line-height: inherit;
  }
  .notion-bookmark:hover {
    border: 1px solid blue;
  }
  .notion-viewport {
    z-index: -10;
  }
  .notion-asset-caption {
    text-align: center;
  }

  .notion-hr {
    border-top: 1px solid rgba(55, 53, 47, 0.16);
  }

  .notion-page {
    width: auto;
    padding-left: 0 !important;
    padding-right: 0 !important;
    overflow: auto;
  }
  .notion-quote {
    padding: 0.2em 0.9em;
  }
  .notion-toggle {
    width: full;
  }
  .notion-collection > .notion-table,
  .notion-collection {
    max-width: full !important;
  }

  .notion-collection > .notion-table > .notion-table-view,
  .notion-collection > .notion-collection-header,
  .notion-full-width {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .notion-collection-row,
  .notion-collection-view-type {
    display: none;
  }
`;
