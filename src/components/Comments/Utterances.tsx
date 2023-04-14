import { CONFIG } from '@/seo.config';
import React, { useEffect } from 'react';
import { useUtterances } from './hooks/useUtterances';

interface IUtterances {
  issueTerm: string;
}

const Utterances: React.FC<IUtterances> = ({ issueTerm }) => {
  useUtterances(issueTerm);
  return (
    <>
      <div id="comments">
        <div className="utterances-frame" />
      </div>
    </>
  );
};

export default Utterances;
